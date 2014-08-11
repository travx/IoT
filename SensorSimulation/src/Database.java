
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.PreparedStatement;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.Cluster.Builder;
import com.datastax.driver.core.policies.ConstantReconnectionPolicy;
import com.google.gson.Gson;


public class Database {
	private String[] nodes;
	
	private String keyspace;
	private Cluster cluster;
	private Session session;
	
	private PreparedStatement psXY;
	private PreparedStatement psYX;
	private PreparedStatement psHIST;
	private PreparedStatement psGRID;
	private PreparedStatement psGETHIST;
	
	public Database(String nodes[], String keyspace){
		setNodes(nodes);
		setKeyspace(keyspace);
		connect();		
	}
	
	private void connect() {
		Builder builder = Cluster.builder();
		builder.addContactPoints(nodes);
		
		//Connection Options
		builder.socketOptions().setConnectTimeoutMillis(30000);
		builder.socketOptions().setReadTimeoutMillis(10000);
		builder.withReconnectionPolicy(new ConstantReconnectionPolicy(100));
		
		cluster = builder.build();
		session = cluster.connect(keyspace);
		init();
	}
	
	private void init(){
		psXY = session.prepare("insert into xy(x,y,reading) values(?,?,?)");
		psYX = session.prepare("insert into yx(x,y,reading) values(?,?,?)");
		psHIST = session.prepare("insert into hist(x,y,time,reading) values(?,?,?,?)");
		psGRID = session.prepare("select * from xy");
		psGETHIST = session.prepare("select * from hist where x=? and y=? limit 20");
	}
	
	public void writeData(int x, int y, int reading){
		Date time = new Date();
		session.execute(psXY.bind(x,y,reading));
		session.execute(psYX.bind(x,y,reading));
		session.execute(psHIST.bind(x,y,time,reading));
	}
	
	public Grid getGrid(){
		Grid grid = new Grid();
		ResultSet results = session.execute(psGRID.bind());
		
		for (Row row : results){
			grid.set(row.getInt("x"), row.getInt("y"), row.getInt("reading"));
		}
				
		return grid;
	}
	
	public String getHistory(int x, int y){
		List<Hist> history = new ArrayList<Hist>();
		ResultSet results = session.execute(psGETHIST.bind(x,y));
				
		for (Row row : results){
			history.add(new Hist(row));
		}
		
		return new Gson().toJson(history);
	}
	
	public String[] getNodes() {
		return nodes;
	}
	public void setNodes(String[] nodes) {
		this.nodes = nodes;
	}
	public String getKeyspace() {
		return keyspace;
	}
	public void setKeyspace(String keyspace) {
		this.keyspace = keyspace;
	}
	public Cluster getCluster() {
		return cluster;
	}
	public void setCluster(Cluster cluster) {
		this.cluster = cluster;
	}
	public Session getSession() {
		return session;
	}
	public void setSession(Session session) {
		this.session = session;
	}
}
