import java.util.Date;

import com.datastax.driver.core.Row;


public class Hist {
	private int x;
	private int y;
	private Date time;
	private int reading;
	
	public Hist(Row row){
		this.setX(row.getInt("x"));
		this.setY(row.getInt("y"));
		this.setTime(row.getDate("time"));
		this.setReading(row.getInt("reading"));
	}
	
	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public int getReading() {
		return reading;
	}
	public void setReading(int reading) {
		this.reading = reading;
	}
	
}
