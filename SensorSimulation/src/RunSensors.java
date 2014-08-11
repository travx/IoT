import java.util.Random;


public class RunSensors {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		int ITERATIONS;
		int WAIT; //Useful when using slow hardware, like Raspberry Pi
		
		if(args.length == 0)
	    {
	        System.out.println("No arguments passed. Using defaults.");
	        ITERATIONS = 10000;
	        WAIT=100;
	    }
		else if(args.length == 1) {
			ITERATIONS = Integer.parseInt(args[0]);
			WAIT=40;
		}
		else {
			ITERATIONS = Integer.parseInt(args[0]);
			WAIT = Integer.parseInt(args[1]);
		}

		System.out.println("Connecting to Cluster.");
		
		String nodes[] = {"c1.music-network.org"};
		//String nodes[] = {"172.16.232.142"};
		
		Database db = new Database(nodes, "sensor");
		//db.connect();
		
		System.out.println("Success! Cluster connection established. Ready to generate sensor data.");
		System.out.println("Running simulation.");
		System.out.println("Iterations: " + ITERATIONS);
		System.out.println("Wait: " + WAIT);		
				
		Random generator = new Random();
		Grid grid = new Grid();
		
		int x;
		int y;
		int reading;
		
		for (int i=0; i < ITERATIONS; i++){
			x = generator.nextInt(Settings.GRID_X);
			y = generator.nextInt(Settings.GRID_Y);
			reading = generator.nextInt(Settings.SENSOR_VALS+1);
			
			grid.set(x,y,reading);
			db.writeData(x, y, reading);

			//System.out.println(x + "," + y + ":  " + reading);
			
			//For slowing down the data generator
			Thread.sleep(WAIT);
		}
		
		grid.display();
	}

}
