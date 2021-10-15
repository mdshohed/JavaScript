var c = document.getElementById("mycanvas"); 
var val = c.getContext("2d");

val.lineWidth = 3; 
val.strokeStyle = "black"; 
val.strokeRect(10,10,380,280);

val.fillStyle = "green"; 
val.fillRect(12,12,376,276);

var centerx = c.width/2; 
var centery = c.height/2;

val.beginPath();
val.arc(centerx, centery, 50, 0, 2*Math.PI, false);


val.fillStyle = "red"; 
val.fill(); 
val.stroke();