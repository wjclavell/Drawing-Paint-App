//set some starting variables
let color = 'black';
let width = 5;
const ctx = canvas.getContext('2d');

//when page loads will run this function
window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    ctx.linewidth = width;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

//default value for when user is not painting ('mousup')
    let painting = false;

//event listeners for mouse events
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mousedown', startingPoint);
    canvas.addEventListener('mouseup', endingPoint);

//line starts at the position of initial mouse click/'mousedown'
function startingPoint(e) {
    painting = true;
    paint(e);
}

//line ends when user releases mouse click/'mouseup'
function endingPoint() {
    painting = false;
    ctx.beginPath();
}

//when mouse is moving, will draw a line from starting point to endpoint
function paint(e) {
    if(!painting) return;   
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}
});

//on button click this function will run and chaneg the stroke color to user selected color
function changeColor(newColor) {
    color = newColor;
}
//wipes the canvas clean by clearing the space of a rectangle the size of the canvas, will run when click clear button
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function findPos(obj) 
{
	var curleft = 0, curtop = 0;
	if (obj.offsetParent) 
	{
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj == obj.offsetParent);

		return { x: curleft-document.body.scrollLeft, y: curtop-document.body.scrollTop };
	}
}
