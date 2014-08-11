
public class SimpleSensor {
	private String location;
	private int value;
	
	public SimpleSensor(int x, int y, int reading){
		this.location = x + "_" + y;
		this.value = reading;
	}
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	
}
