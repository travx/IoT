

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SensorServlet
 */
public class SensorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private DatabaseHelper data;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SensorServlet() {
        super();
        // TODO Auto-generated constructor stub
        data = new DatabaseHelper();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String action = request.getParameter("action");
		if (action==null){
			System.out.println("No parameter received");
			action = "changes";
		}
		
		
		if (action.equals("history")){
			doHistory(request, response); 
		}
		else {
			response.getWriter().write(data.getChanges());
		}			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	
	public void doHistory(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String location = request.getParameter("location");
		response.getWriter().write(data.getHistory(location));
	}

}
