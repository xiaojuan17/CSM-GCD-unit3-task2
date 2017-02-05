//draw tool "I Don't Understand"

//MOUSE
//drag                : draw with text

//KEYS
//del, backspace      : clear screen
//arrow up            : angle distortion +
//arrow down          : angle distortion -
//s                   : save your drawing as png

var x = 0, y = 0;
var stepSize = 5.0;

var letters = "听不懂 I don't understand ";

var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;


function setup() {
  // use full screen size 
  createCanvas(1200,900);
  background(255);
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  textStyle(BOLD);
  fill(0);

}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Helvetica');
    textSize(fontSizeMin+d/2)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_3_3_01.png");
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1; 
}