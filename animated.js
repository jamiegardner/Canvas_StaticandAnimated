var c = document.getElementById("animatedRocket");
var ctx = c.getContext("2d");

    // Variables for animating the rocket body
    var y1 = 365;
    var y2 = 264;
    var y3 = 331;

    // Variables for animating the rocket left-wing
    var y4 = 332;
    var y5 = 343;
    var y6 = 376;
    var y7 = 366;
    var y8 = 360;

    // Variables for animating the rocket right-wing
    var y9 = 367;
    var y10 = 361;

    // Variables for animating the rocket flame
    var y11 = 368;
    var y12 = 385;
    var y13 = 398;

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,c.width,c.height);

        <!-- Rocket Body -->
        ctx.beginPath();
        ctx.moveTo(263,y1); // Startpoint (x, y)
        ctx.quadraticCurveTo(256, y3, 274, y2); // (Control point, control point, end(x, y))
        ctx.quadraticCurveTo(295, y3, 285, y1);
        ctx.lineTo(263, y1); // Endpoint (x, y)
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();

        <!-- Rocket Left-wing -->
        ctx.beginPath();
        ctx.moveTo(260, y4);
        ctx.quadraticCurveTo(242, y5, 242, y6);
        ctx.quadraticCurveTo(251, y7, 260, y8);
        ctx.fillStyle = "#1883ad";
        ctx.fill();
        ctx.closePath();

        <!-- Rocket Right-wing -->
        ctx.beginPath();
        ctx.moveTo(290, y4);
        ctx.quadraticCurveTo(307, y5, 306, y6); // y values used twice as they're same as left-wing value
        ctx.quadraticCurveTo(298, y9, 288, y10);
        ctx.fillStyle = "#1883ad";
        ctx.fill();
        ctx.closePath();

        <!-- Rocket Flame -->
        ctx.beginPath();
        ctx.moveTo(274, y11);
        ctx.quadraticCurveTo(253, y12, 274, y13);
        ctx.quadraticCurveTo(294, y12, 274, y11);
        ctx.fillStyle = "#e47d42";
        ctx.fill();
        ctx.closePath();

        var s = -0.3; // Variable to hold the positive speed of the rocket

        // Animating the rocket body onto canvas
        y1 += s;
        y2 += s;
        y3 += s;

        // Animating the rocket left-wing onto canvas
        y4 += s;
        y5 += s;
        y6 += s;
        y7 += s;
        y8 += s;

        // Animating the rocket right-wing onto canvas
        y9 += s;
        y10 += s;

        // Animating the rocket flame onto canvas
        y11 += s;
        y12 += s;
        y13 += s;
    }

    animate();