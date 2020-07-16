//set some starting variables
let canvas;
let ctx;
let painting = false;
let color = "black"; //default drawing color
let width = 5; // default stroke width
let density = 50;

function getRnmInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//when page loads will run this function
window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //canvas size
  canvas.height = window.innerHeight * 0.8;
  canvas.width = window.innerWidth;

  round();
};

// *function to use round brush
function round() {
  //create event listeners to activate in this function
  canvas.addEventListener("mousemove", paint);
  canvas.addEventListener("mousedown", startingPoint);
  canvas.addEventListener("mouseup", endingPoint);
  //when mouse is moving, will draw a line from starting point to endpoint
  function paint(e) {
    //have to account for the space in upper left of the canvas from edge of window
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;
    if (!painting) return;

    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;

    ctx.lineTo(xPos, yPos);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
  }
  //line ends when user releases mouse click/'mouseup'
  function startingPoint(e) {
    painting = true;
    paint(e);
  }
  //line starts at the position of initial mouse click/'mousedown'
  function endingPoint() {
    painting = false;
    ctx.beginPath();
  }
}

/*// *function to use spray brush
function spraying() {
  //event listeners to activate in this function
  canvas.addEventListener("mousemove", spray);
  canvas.addEventListener("mousedown", startingPoint);
  canvas.addEventListener("mouseup", endingPoint);

  function spray(e) {
    if (!painting) return;

    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    for (var i = density; i--; ) {
      var radius = 20;
      var offsetX = getRandomInt(-radius, radius);
      var offsetY = getRandomInt(-radius, radius);
      ctx.fillRect(xPos + offsetX, yPos + offsetY, 1, 1);
    }
  }
  //line ends when user releases mouse click/'mouseup'
  function startingPoint(e) {
    painting = true;
    ctx.lineWidth = 10;
    ctx.lineJoin = ctx.lineCap = "round";
    ctx.moveTo(xPos, yPos);
  }
  //line starts at the position of initial mouse click/'mousedown'
  function endingPoint() {
    painting = false;
    ctx.beginPath();
  }
}*/
//on button click this function will run and change the stroke color to user selected color
function changeColor(newColor) {
  color = newColor;
}
function colorPick() {
  colorPicked = document.getElementById("color-picker").value;
  color = colorPicked;
}
//set stroke size range value to lineWidth
function changeStroke() {
  stroke = document.getElementById("change-stroke").value;
  width = stroke;
}
//wipes the canvas clean by clearing the space of a rectangle the size of the canvas, will run when click clear button
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
