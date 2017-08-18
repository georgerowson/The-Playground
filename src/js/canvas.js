var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = 550

var c = canvas.getContext('2d')

/*
//Fills

c.fillStyle = "rgba(255, 0, 0, 0.2)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(255, 0, 0, 0.9)";
c.fillRect(300, 300, 100, 100);

console.log(canvas);

//Lines

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "blue";
c.stroke();

//Arcs

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "purple";
c.stroke();

for (var i = 0; i < 1000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var a = (Math.random() * (0.100 - 1.000) + 1.000).toFixed(4);
    var rgb = 'rgba('+r+ ', ' +g+ ', ' +b+ ', ' +a+ ')';

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = rgb;
    c.stroke();
}
*/

var mouse = {
  x: undefined,
  y: undefined

}

var maxRadius = 40
// var minRadius = 2;

window.addEventListener('mousemove',
  function (event) {
    mouse.x = event.x
    mouse.y = event.y
  })

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  //         canvas.height = window.innerHeight;
})

function Circle (x, y, dx, dy, radius, fill, stroke) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.minRadius = radius
  this.fill = fill
  this.stroke = stroke

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0,
      Math.PI * 2, false)
    c.strokeStyle = stroke
    c.fillStyle = fill
    c.stroke()
    c.fill()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth ||
      this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius >
      innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    // Interactivity

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }

    this.draw()
  }
}

var circleArray = []

for (var i = 0; i < 1000; i++) {
  var radius = Math.random() * 3 + 1
  var x = Math.random() * (innerWidth - radius * 2) + radius
  var y = Math.random() * (innerHeight - radius * 2) + radius
  var dx = (Math.random() - 0.5) * 2
  var dy = (Math.random() - 0.5) * 2
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var a = Math.random() * (0.100 - 1.000) + 1.000
  var fill = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
  var stroke = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
  circleArray.push(new Circle(x, y, dx, dy, radius, fill, stroke))
}

function animate () {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()
