var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#008080";
ctx.fillRect(50, 50, 100, 80);

var drw = canvas.getContext("2d");
drw.beginPath();
drw.arc(400, 90, 50, 0, 2 * Math.PI);
drw.stroke();

var box = canvas.getContext("2d");
box.font = "20px Comic Sans MS";
box.fillStyle = "#008080";
box.textAlign = "center";
box.fillText("CIT 261 Fluency", canvas.width / 2, 200);
