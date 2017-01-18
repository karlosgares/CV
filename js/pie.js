 google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable([
	['Tareas', 'Horas diarias'],
	['Trabajo - An�lisis',    1],
	['Trabajo - Programaci�n',  6],
	['Trabajo - Orden',  0.5],
	['Deporte',   1],
	['Familia - Educaci�n',  1.5],
	['Familia - Ocio',  2],
	['Vida interior',  1]
]);

var options = {
  title: 'Actividad diaria'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}


function AbrirMas() {
	var mas = document.getElementById("list-experiencia");
	var link = document.getElementById("link-experiencia");
	
	if ( mas.style.display == "")
	{
		mas.style.display = "none";
		link.innerHTML = "Ver m�s";
	}
	else {
	
		mas.style.display = "";
		link.innerHTML = "Ver menos";
	}

}