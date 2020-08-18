var helloWorld = document.getElementById("helloWorld");

var turnRedButton = document.getElementById("turnRed");
var turnBlueButton = document.getElementById("turnBlue");
var turnGreenButton = document.getElementById("turnGreen");
var toggleColorsButton= document.getElementById("toggleColors");

var increaseTextButton = document.getElementById("increaseText");
var decreaseTextButton = document.getElementById("decreaseText");

var moveLeftButton = document.getElementById("moveLeft");
var moveRightButton = document.getElementById("moveRight");
var moveDownButton = document.getElementById("moveDown");
var moveUpButton = document.getElementById("moveUp");

var stopMoveLeftButton = document.getElementById("stopMoveLeft");
var stopMoveRightButton = document.getElementById("stopMoveRight");
var stopMoveDownButton = document.getElementById("stopMoveDown");
var stopMoveUpButton = document.getElementById("stopMoveUp");

var moveDiagonalDownRightButton = document.getElementById("moveDiagonalDownRight");
var moveDiagonalDownLeftButton = document.getElementById("moveDiagonalDownLeft");
var moveDiagonalUpRightButton = document.getElementById("moveDiagonalUpRight");
var moveDiagonalUpLeftButton = document.getElementById("moveDiagonalUpLeft");

var flashButton = document.getElementById("startFlash");
var stopFlashButton = document.getElementById("stopFlash"); 

var stopFlash = false;

var stopMoveLeft = false;
var stopMoveRight = false;
var stopMoveUp = false;
var stopMoveDown = false;

var isMovingLeft = false;
var isMovingRight = false;
var isMovingUp = false;
var isMovingDown = false; 

turnRedButton.addEventListener("click", turnTextRed);

turnBlueButton.addEventListener("click", turnTextBlue);
turnGreenButton.addEventListener("click", turnTextGreen);
toggleColorsButton.addEventListener("click", toggleColors);

increaseTextButton.addEventListener("click", increaseTextSize);
decreaseTextButton.addEventListener("click", decreaseTextSize);

moveLeftButton.addEventListener("click", keepMovingLeft);
moveRightButton.addEventListener("click", keepMovingRight);
moveDownButton.addEventListener("click", keepMovingDown);
moveUpButton.addEventListener("click", keepMovingUp);

stopMoveLeftButton.addEventListener("click", stopMovingLeft);
stopMoveRightButton.addEventListener("click", stopMovingRight);
stopMoveDownButton.addEventListener("click", stopMovingDown);
stopMoveUpButton.addEventListener("click", stopMovingUp);

moveDiagonalDownRightButton.addEventListener("click", moveDiagonalDownRight);
moveDiagonalDownLeftButton.addEventListener("click", moveDiagonalDownLeft);
moveDiagonalUpRightButton.addEventListener("click", moveDiagonalUpRight);
moveDiagonalUpLeftButton.addEventListener("click", moveDiagonalUpLeft);

flashButton.addEventListener("click", startTextFlash);
stopFlashButton.addEventListener("click", stopTextFlash);


function turnTextRed() {
	helloWorld.style.color = "red";
}

function turnTextBlue() {
	helloWorld.style.color = "blue";
}

function turnTextGreen() {
	helloWorld.style.color = "green";
}

function toggleColors() {
	if(helloWorld.style.color == "red"){
		helloWorld.style.color = "blue";
	}
	else if(helloWorld.style.color == "blue"){
		helloWorld.style.color = "green";
	}
	else if(helloWorld.style.color == "green"){
		helloWorld.style.color = "red";
	}
}
 


function increaseTextSize() {
 	var currentFontSize = getFontSize();
 	var newFontSize = currentFontSize + 5;
 	newFontSize = newFontSize + "px";
 	helloWorld.style.fontSize = newFontSize;
}

function decreaseTextSize() {
 	var currentFontSize = getFontSize();
 	var newFontSize = currentFontSize - 5;
 	newFontSize = newFontSize + "px";
 	helloWorld.style.fontSize = newFontSize;
}

function moveTextLeft() {
 	var currentLeftValue = getLeftValue();
 	var newLeftValue = currentLeftValue - 5;
 	newLeftValue = newLeftValue + "px";
 	helloWorld.style.left = newLeftValue;
 	
}

function moveTextRight() {
 	var currentLeftValue = getLeftValue();
 	var newLeftValue = currentLeftValue + 5;
 	newLeftValue = newLeftValue + "px";
 	helloWorld.style.left = newLeftValue;
}

function moveTextDown() {
	var currentLeftValue = getTopValue();
	var newLeftValue = currentLeftValue + 5;
	newLeftValue = newLeftValue + "px";
	helloWorld.style.top = newLeftValue;
}

function moveTextUp() {
	var currentLeftValue = getTopValue();
	var newLeftValue = currentLeftValue - 5;
	newLeftValue = newLeftValue + "px";
	helloWorld.style.top = newLeftValue;
}

function moveDiagonalDownRight(){
	keepMovingDown();
	keepMovingRight();
}

function moveDiagonalDownLeft(){
	keepMovingDown();
	keepMovingRight();
}

function moveDiagonalUpRight(){
	keepMovingUp();
	keepMovingRight();
}

function moveDiagonalUpLeft(){
	keepMovingUp();
	keepMovingLeft();
}

function startTextFlash(){
	if(stopFlash == false){
		if(helloWorld.style.color == "yellow"){
			helloWorld.style.color = "red";
		}
		else{
			helloWorld.style.color = "yellow";
		}
		setTimeout(startTextFlash, 200);
	}
	else {
		stopFlash = false;
	}
}

function stopTextFlash(){
	stopFlash = true;
}

function stopMovingLeft(){
	stopMoveLeft = true;
	isMovingLeft = false;
}

function stopMovingRight(){
	stopMoveRight = true;
	isMovingRight = false;
}

function stopMovingUp(){
	stopMoveUp = true;
	isMovingUp = false;
}

function stopMovingDown(){
	stopMoveDown = true;
	isMovingDown = false;
}

function toggleMoveLeftListener(isMovingLeft){
	if(isMovingLeft == true){
		moveLeftButton.removeEventListener("click", keepMovingLeft);
	}
	else{
		moveLeftButton.addEventListener("click", keepMovingLeft)
	}
}

function toggleMoveRightListener(isMovingRight){
	if(isMovingRight == true){
		moveRightButton.removeEventListener("click", keepMovingRight);
	}
	else{
		moveRightButton.addEventListener("click", keepMovingRight);
	}
}

function toggleMoveUpListener(isMovingUp){
	if(isMovingUp == true){
		moveUpButton.removeEventListener("click", keepMovingUp)
	}
	else{
		moveUpButton.addEventListener("click", keepMovingUp)
	}
}

function toggleMoveDownListener(isMovingDown){
	if(isMovingDown == true){
		moveDownButton.removeEventListener("click", keepMovingDown);
	}
	else {
		moveDownButton.addEventListener("click", keepMovingDown);
	}
}

function keepMovingLeft(){
	toggleMoveLeftListener(isMovingLeft);
	if(stopMoveLeft == false){
		if(getLeftValue() > 0){
			moveTextLeft();
			setTimeout(keepMovingLeft, 10);
		}
		else {
			keepMovingRight();
		}
	}
	else {
		stopMoveLeft = false;
	}
	isMovingLeft = true;
}

function keepMovingRight() {
	toggleMoveRightListener(isMovingRight);
	if(stopMoveRight == false){
		if(getLeftValue() < 600){
			moveTextRight();
			setTimeout(keepMovingRight, 10);
		}
		else {
			keepMovingLeft();
		}
	}
	else {
		stopMoveRight = false;
	}
	isMovingRight = true;
}

function keepMovingUp() {
	toggleMoveUpListener(isMovingUp);
	if(stopMoveUp == false){
		if(getTopValue() > 0){
			moveTextUp();
			setTimeout(keepMovingUp, 10);
		}
		else {
			keepMovingDown();
		}
	}
	else {
		stopMoveUp = false;
	}
	isMovingUp = true;
}

function keepMovingDown() {
	toggleMoveDownListener(isMovingDown);
	if(stopMoveDown == false){
		if(getTopValue() < 600){
			moveTextDown();
			setTimeout(keepMovingDown, 10);
		}
		else {
			keepMovingUp();
		}
	}
	else {
		stopMoveUp = false;
	}
	isMovingDown = true;
}


/*The following two functions are helper functions.
getFontSize() returns the current numeric size of the text in pixels
getLeftValue() returns the current numeric value of the left property which defines horizontal or "x" position 
*/


function getFontSize(){
	var el = document.getElementById("helloWorld");
	var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
	var fontSize = parseFloat(style);

	return fontSize;

}

function getLeftValue(){
	var el = document.getElementById("helloWorld");
	var style = window.getComputedStyle(el, null).getPropertyValue("left");
	var leftValue = parseFloat(style);

	return leftValue;
}

function getTopValue(){
	var el = document.getElementById("helloWorld");
	var style = window.getComputedStyle(el, null).getPropertyValue("top");
	var topValue = parseFloat(style);

	return topValue;
}