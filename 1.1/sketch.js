var rectX = 350;
var circleX = 400;
var speedX = 5;

var circleY = 250;
var rectY = 242.5;
var rectY2 = 272.5;
var speedY = 10;

var circleZ = 97.5;
var speedZ = 10;


function setup() {
  createCanvas(525, 725);
}

function draw() {
background(0);



//row 1
if(mouseY<225) {
  fill(240, 81, 34);  
  noStroke(); 
  rect(30, 100, 425, 135, 67.5)
  
  fill(255, 199, 0);  
  noStroke(); 
  ellipse(circleX, 167.5, 135, 135);
  
  fill(0,0,0);  
  noStroke(); 
  ellipse(circleX, 167.5, 75, 75);
  
  if (rectX > 435) {
    speedX = -5;
  } 
  
  if (rectX < 80) {
    speedX = 5;
  } 
  
  rectX = rectX + speedX;
  
  if (circleX > 397.5) {
    speedX = -5;
  }  
  
  if (circleX < 107.5) {
    speedX = 5;
  }  
  
  circleX = circleX + speedX;
  
  
} else {
  
  fill(240, 81, 34);  
  noStroke(); 
  rect(30, 100, rectX, 135);
  
  fill(255, 199, 0);  
  noStroke(); 
  ellipse(circleX, 167.5, 135, 135);
  
  fill(0,0,0);  
  noStroke(); 
  ellipse(circleX, 167.5, 75, 75);
  
  if (rectX > 435) {
    speedX = -5;
  } 
  
  if (rectX < 80) {
    speedX = 5;
  } 
  
  rectX = rectX + speedX;
  
  if (circleX > 457.5) {
    speedX = -5;
  }  
  
  if (circleX < 97.5) {
    speedX = 5;
  }  
  
  circleX = circleX + speedX;
  
}


//row 2

if(mouseY<400) {
  
fill(240, 81, 34);  
noStroke(); 
ellipse(107.5, 367.5, 135, 135);

fill(255, 199, 0);  
noStroke(); 
rect(rectY, 300, 135, 135);

fill(0,0,0);  
noStroke(); 
rect(rectY2, 330, 75, 75);

if (rectY > 440) {
  speedY = -10;
}  

if (rectY < 167) {
  speedY = 10;
}  

if (rectY2 > 440) {
  speedY = -10;
}  

if (rectY2 < 167) {
  speedY = 10;
}  

rectY = rectY + speedY;
rectY2 = rectY2 + speedY;
  
} else {
  
fill(240, 81, 34);  
noStroke(); 
rect(30, 300, 135, 135);

fill(255, 199, 0);  
noStroke(); 
ellipse(circleY, 367.5, 135, 135);

fill(0,0,0);  
noStroke(); 
ellipse(circleY, 367.5, 75, 75);

if (circleY > 457.5) {
  speedY = -10;
}  

if (circleY < 232.5) {
  speedY = 10;
}  

circleY = circleY + speedY;

}

//row 3

if(mouseY > 520 ) {
  
fill(255, 199, 0);  
noStroke(); 
rect(40, 500, 425, 135);

fill(240, 81, 34);  
noStroke(); 
ellipse(circleZ, 567.5, 135, 135);

fill(0,0,0);  
noStroke(); 
ellipse(circleZ, 567.5, 75, 75);

if (circleZ > 397.5) {
  speedZ = -10;
}  

if (circleZ < 107.5) {
  speedZ = 10;
}  

circleZ = circleZ + speedZ;


} else {
  
fill(255, 199, 0);  
noStroke(); 
rect(40, 500, 425, 135, 67.5);

fill(240, 81, 34);  
noStroke(); 
ellipse(circleZ, 567.5, 135, 135);

fill(0,0,0);  
noStroke(); 
ellipse(circleZ, 567.5, 75, 75);

if (circleZ > 397.5) {
  speedZ = -10;
}  

if (circleZ < 107.5) {
  speedZ = 10;
}  

circleZ = circleZ + speedZ;

}

}
