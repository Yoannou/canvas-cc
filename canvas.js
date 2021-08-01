// Initialization:
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight;
// The context variable is an object that has a bunch of methods used to draw in a 2d canvas space
const c = canvas.getContext('2d');

// Constants:
const mouse = {
  x: undefined,
  y: undefined
}
const maxRadius = 30;
const colourArray = [
  "rgba(200, 100, 20, 0.7)",
  "rgba(100, 200, 20, 0.7)",
  "rgba(200, 20, 100, 0.7)",
  "rgba(20, 100, 200, 0.7)",
  "rgba(100, 20, 200, 0.7)"
]
const invisible = "rgba(0, 0, 0, 0)";

// Event Listeners:
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


// Using function syntax to create an object class Circle
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.colour = colourArray[Math.floor(Math.random() * colourArray.length)];
  this.visible = false;

  this.draw = function() {
    //console.log("Drawing circle");
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = "#ddaa55";
    if (this.visible == false) {
      c.fillStyle = invisible;
    }
    else {
      c.fillStyle = this.colour;
    }
    //c.stroke();
    c.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;


    // Mouse interactivity:
    if (mouse.x - this.x < 20 && mouse.x - this.x > -20
      && mouse.y - this.y < 20 && mouse.y - this.y > -20) {
      if (this.radius < maxRadius) {
        this.radius += 10;
      }
    }
    else if (this.radius > this.minRadius){
      this.visible = true;
      this.radius -= 0.1;
    }
    else {
      this.visible = false;
    }

    this.draw()
  }
}

let circleArray = [];

// Resets everything, mainly on load or when browser is resized
function init() {
  circleArray = [];
  for (let i = 0; i < 2000; i++) {
    let radius = Math.random()*3 + 1;
    let x = Math.random() * (innerWidth - radius*2)+radius;
    let y = Math.random() * (innerHeight - radius*2)+radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

// Can call animation function whatever we want, it continuously gets called by requestAnimationFrame
// Typically we clear the whole canvas in this function and redraw each frame from scratch
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init()
animate();
