import com.datastax.driver.core.Row;


public class Sensor {
	private int x;
	private int y;
	private int reading;

	public Sensor(Row row){
		this.x = row.getInt("x");
		this.y = row.getInt("y");
		this.reading = row.getInt("reading");
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
	public int getReading() {
		return reading;
	}
	public void setReading(int reading) {
		this.reading = reading;
	}
	
}
