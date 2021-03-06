var c = document.getElementById("staticRocket");
var ctx = c.getContext("2d");

<!-- Rocket Body -->
ctx.beginPath();
ctx.moveTo(664, 233); // Startpoint (x, y)
ctx.quadraticCurveTo(560, 280, 448, 411); // (Control point, control point, end(x, y))
ctx.lineTo(488, 451);
ctx.quadraticCurveTo(619, 338, 666, 235);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.closePath();

<!-- Rocket Inner Glass -->
ctx.beginPath();
ctx.arc(598.5,300,15,0,2*Math.PI);
ctx.fillStyle = "#badff2";
ctx.fill();
ctx.closePath();

<!-- Rocket Glassrim -->
ctx.beginPath();
ctx.arc(598.5,300,15,0,2*Math.PI);
ctx.strokeStyle = "#798996";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

<!-- Rocket Left Wing -->
ctx.beginPath();
ctx.moveTo(535, 320);
ctx.lineTo(492, 318);
ctx.lineTo(392, 385);
ctx.lineTo(472, 384);
ctx.fillStyle = "#1883ad";
ctx.fill();
ctx.closePath();

<!-- Rocket Right Wing -->
ctx.beginPath();
ctx.moveTo(582, 360);
ctx.lineTo(585, 406);
ctx.lineTo(514, 505);
ctx.lineTo(518, 425);
ctx.fillStyle = "#1883ad";
ctx.fill();
ctx.closePath();

<!-- Rocket Exhaust -->
ctx.beginPath();
ctx.moveTo(451, 414);
ctx.lineTo(432, 438);
ctx.lineTo(460, 467);
ctx.lineTo(485, 448);
ctx.fillStyle = "#868b8f";
ctx.fill();
ctx.closePath();

<!-- Rocket Fuelpipe -->
ctx.beginPath();
ctx.moveTo(547, 348);
ctx.lineTo(451, 444);
ctx.lineTo(455, 448);
ctx.lineTo(551, 352);
ctx.fillStyle = "#1883ad";
ctx.fill();
ctx.closePath();

<!-- Moon -->
ctx.beginPath();
ctx.moveTo(0,200);
ctx.quadraticCurveTo(35, 260, 0, 330);
ctx.fillStyle = "#e6e1ce";
ctx.fill();
ctx.closePath();

<!-- Earth Outershadow -->
ctx.beginPath();
ctx.arc(125,710,333,0,2*Math.PI);
ctx.fillStyle = "#283659";
ctx.fill();
ctx.closePath();

<!-- Rocket Outerflame -->
ctx.beginPath();
ctx.moveTo(439, 457);
ctx.quadraticCurveTo(387, 443, 340, 552);
ctx.quadraticCurveTo(449, 510, 439, 457);
ctx.fillStyle = "#dd4841";
ctx.fill();
ctx.closePath();

<!-- Rocket Innerflame -->
ctx.beginPath();
ctx.moveTo(442, 462);
ctx.quadraticCurveTo(391, 464, 356, 536);
ctx.quadraticCurveTo(429,503, 430, 463);
ctx.fillStyle = "#e47e3c";
ctx.fill();
ctx.closePath();

<!-- Earth #2 Innershadow -->
ctx.beginPath();
ctx.arc(120,710,215,0,2*Math.PI);
ctx.fillStyle = "#5c5d7b";
ctx.fill();
ctx.closePath();

<!-- Earth #1 Innershadow -->
ctx.beginPath();
ctx.arc(120,710,201,0,2*Math.PI);
ctx.fillStyle = "#908ca7";
ctx.fill();
ctx.closePath();

<!-- Earth -->
ctx.beginPath();
ctx.arc(120,710,190,0,2*Math.PI);
ctx.fillStyle = "#0f82af";
ctx.fill();
ctx.closePath();

<!-- Sun Outershadow -->
ctx.beginPath();
ctx.moveTo(1024,50);
ctx.quadraticCurveTo(900, 200, 1024,328);
ctx.fillStyle = "#283659";
ctx.fill();
ctx.closePath();

<!-- Sun -->
ctx.beginPath();
ctx.moveTo(1024,100);
ctx.quadraticCurveTo(962, 200, 1024, 282);
ctx.fillStyle = "#e17f34";
ctx.fill();
ctx.closePath();

<!-- Earth Land object (Britain) -->
ctx.beginPath();
ctx.arc(210,613,8,0,2*Math.PI);
ctx.fillStyle = "#b3d662";
ctx.fill();
ctx.closePath();

<!-- Earth Land object (Africa) -->
ctx.beginPath();
ctx.arc(90,783,65,0,2*Math.PI);
ctx.fillStyle = "#b3d662";
ctx.fill();
ctx.closePath();

<!-- Earth Land object (Asia) -->
ctx.beginPath();
ctx.arc(240,715,35,0,2*Math.PI);
ctx.fillStyle = "#b3d662";
ctx.fill();
ctx.closePath();

<!-- Earth Land object (Scandinavia) -->
ctx.beginPath();
ctx.arc(90,600,55,0,2*Math.PI);
ctx.fillStyle = "#b3d662";
ctx.fill();
ctx.closePath();
