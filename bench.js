/*
Code that is not currently being used is stored in this file for later.
*/

/* LESSON 1 ***************************************************/

// RECT
// Define the style for our rectangles:
// fillRect creates a rectangle. Params: (x, y, width, height):
c.fillStyle = "rgba(255, 100, 100, 0.4)";
c.fillRect(500, 20, 100, 100);
c.fillStyle = "rgba(100, 100, 255, 0.4)";
c.fillRect(800, 300, 100, 100);
c.fillStyle = "rgba(100, 255, 100, 0.4)";
c.fillRect(200, 200, 100, 100);


/* LESSON 2 ***************************************************/

// LINE
// First we simply declare that we want a path:
c.beginPath();
// Declare where we want our path to start. Params: (x, y):
c.moveTo(50, 300);
// Declare where we want our path to end:
c.lineTo(300, 100);
c.lineTo(500, 220);
c.lineTo(20, 20);
// Path is invisible until we call a stroke method:
c.strokeStyle = "#436b95"
c.stroke();

// ARC / CIRCLE
// Takes a lot of arguments, uses radians for angle. Params: (x, y, r, startAngle, endAngle, counterclockwise)
// Must use beginPath() to start a new path, not attacheed to previous path
c.beginPath();
c.arc(300, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "#ddd";
c.stroke();

// Drawing multiple circles with a for loop:
// CPU can handle around 2500 circles in one go
for (let i = 0; i < 7; i++) {
    let coords = i*30 + 400;
    let radius = i*10 + 30;
    c.beginPath();
    c.arc(coords, coords, radius, 0, Math.PI*2, false);
    c.strokeStyle = "#deaa33";
    c.stroke();
}


/* LESSON 3 ***************************************************/

// Initial X and Y coords
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
// X and Y velocity (can be negative or positive -0.5 - 0.5 random range)
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 30;
// Circle radius
let radius = 30;
