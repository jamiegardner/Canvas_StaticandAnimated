var c = document.getElementById("animatedRocket");
var ctx = c.getContext("2d");

function drawRocket(){
    <!-- Rocket Body -->
    ctx.beginPath();
    ctx.moveTo(263, 365); // Startpoint (x, y)
    ctx.quadraticCurveTo(256, 331, 274, 264); // (Control point, control point, end(x, y))
    ctx.quadraticCurveTo(295, 331, 285, 365);
    ctx.lineTo(263, 365);
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();

    <!-- Rocket Leftwing -->
    ctx.beginPath();
    ctx.moveTo(260, 332); // Startpoint (x, y)
    ctx.quadraticCurveTo(242, 343, 242, 376); // (Control point, control point, end(x, y))
    ctx.quadraticCurveTo(251, 366, 260, 360);
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();

    <!-- Rocket Rightwing -->
    ctx.beginPath();
    ctx.moveTo(290, 332); // Startpoint (x, y)
    ctx.quadraticCurveTo(307, 343, 306, 376); // (Control point, control point, end(x, y))
    ctx.quadraticCurveTo(298, 367, 288, 361);
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();

    <!-- Rocket Flame -->
    ctx.beginPath();
    ctx.moveTo(274, 368); // Startpoint (x, y)
    ctx.quadraticCurveTo(253, 385, 274, 398);
    ctx.quadraticCurveTo(294, 385, 274, 368); // (Control point, control point, end(x, y))
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();

}

var x = 400;
var y = 0;
setInterval(function(){
    drawRocket(10);
    ctx.clearRect(0,0,550,400);
    x++;

    drawRocket(270);
    y++;

}, 200);