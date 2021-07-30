var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight;

// The context variable is an object that has a bunch of methods used to draw in a 2d canvas space
var c = canvas.getContext('2d');

// Using function syntax to create an object class Circle
function Circle(x, y, dx, dy, radius ) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    console.log("Drawing circle");
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI*2, false);
    c.strokeStyle = "#ddaa55";
    c.fillStyle = "rgba(200, 100, 20, 0.7)";
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

    this.draw()
  }
}


let circleArray = [];
for (let i = 0; i < 100; i++) {
  let radius = Math.random()*70;
  let x = Math.random() * (innerWidth - radius*2)+radius;
  let y = Math.random() * (innerHeight - radius*2)+radius;
  let dx = (Math.random() - 0.5);
  let dy = (Math.random() - 0.5);

  circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);


// Can call animation function whatever we want, it continuously gets called by requestAnimationFrame
// Typically we clear the whole canvas in this function and redraw each frame from scratch
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
