
public class Grid {
	private int data[][];
	
	public Grid(){
		//initialize a 10x10 array to represent the sensor network
		data = new int[Settings.GRID_X][Settings.GRID_Y];
		//for (int x=0; x<Settings.GRID_X; x++){
		//	for (int y=0; y<Settings.GRID_Y; y++){
		//		data[x][y]=0;
		//	}
		//}
	}
	
	public void set(int x,int y, int reading){
		if (checkBounds(x,y)) data[x][y]=reading;
	}
	
	public int get(int x, int y){
		if (checkBounds(x,y)) return data[x][y];
		else return -1;
	}
	
	private boolean checkBounds(int x, int y){
		if (x < Settings.GRID_X && x >= 0 && y < Settings.GRID_Y && y >= 0) return true;
		else return false;
	}
	
	//write grid to console for debugging
	public void display(){
		String line="";
		for (int x=0; x<Settings.GRID_X; x++){
			for (int y=0; y<Settings.GRID_Y; y++){
				line = line + get(x,y) + "  ";
			}
			System.out.println(line);
			line = "";
		}
	}
}
