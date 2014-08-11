import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;


public class DatabaseHelper {
	private Database db;
	private Grid currentGrid;
	private Grid oldGrid;
	
	public DatabaseHelper(){
		String nodes[] = {"c1.music-network.org"};
		//String nodes[] = {"172.16.232.142"};

		db = new Database(nodes, "sensor");
		//db.connect();
		
		oldGrid = new Grid();
	}
	
	public String getChanges(){
		List<SimpleSensor> changes = new ArrayList<SimpleSensor>();
		currentGrid = db.getGrid();
		
		for (int x=0; x<Settings.GRID_X; x++){
			for (int y=0; y<Settings.GRID_Y; y++){
				if (currentGrid.get(x,y) != oldGrid.get(x,y)){
					SimpleSensor ss = new SimpleSensor(x, y, currentGrid.get(x,y));
					changes.add(ss);
				}
			}
		}
		
		oldGrid = currentGrid;
		
		return new Gson().toJson(changes);
	}
	
	public String getHistory(String location){
		String[] xy;
		xy = location.split("_");
		
		return db.getHistory(Integer.parseInt(xy[0]), Integer.parseInt(xy[1]));
	}
	
}
