<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sensor History</title>

    <script type="text/javascript" src="scripts/jchartfx/js/jchartfx.system.js"></script>
    <script type="text/javascript" src="scripts/jchartfx/js/jchartfx.coreVector.js"></script>
    <script type="text/javascript" src="scripts/jchartfx/js/jchartfx.animation.js"></script>
    <script type="text/javascript" src="scripts/jchartfx/js/jchartfx.CoreVector3d.js"></script>
     
    <script src="scripts/jquery-latest.min.js"></script>
	<script type="text/javascript">

var chart_history;

function loadPage(){
	load_chart();
	new_data();
}

function load_chart(){	
	chart_history = new cfx.Chart();
	chart_history.getAnimations().getLoad().setEnabled(true);
	chart_history.setGallery(cfx.Gallery.Step);
	//chart_history.getView3D().setEnabled(true);

	chart_history.getAxisY().setMin(-1);
	chart_history.getAxisY().setMax(2);
	
	var fields = chart_history.getDataSourceSettings().getFields();
	var field1 = new cfx.FieldMap();
	var field2 = new cfx.FieldMap();
	
	field1.setName("time");
	field1.setDisplayName("Timestamp");
	field1.setUsage(cfx.FieldUsage.Label);
	fields.add(field1);
	
	field2.setName("reading");
	field2.setDisplayName("Sensor Value");
	field2.setUsage(cfx.FieldUsage.Value);
	fields.add(field2);	
	
	var divHolder = document.getElementById('Chart');
	chart_history.create(divHolder);
}

function new_data(){
    $.getJSON('SensorServlet?action=history&location=<%=request.getParameter("location")%>', function(data) {
    	chart_history.setDataSource(data);
        });
}

setInterval(function(){new_data()}, 5000);

</script> 

</head>
<body onload="loadPage()">

<p>
<div id="Chart" style="width:900px;height:500px;display:inline-block"></div>
</p>

</body>
</html>