var recth = 120;
var rect1y = 120;
var rect3y = 485

var tri1=210
var tri2x=515
var tri2y=315

var speed1 = 3;
var speed2 =1;
var speed3 =2;




function setup() {
  createCanvas(525, 725);
}

function draw() {
background(20,143,164);


//rect2
fill(255);  
noStroke(); 
rect(175, mouseY+120, 175, 120);

//rect1
fill(0);  
noStroke(); 
rect(175, mouseY, 175, 120);


//rect4
fill(0);  
noStroke(); 
rect(175, mouseY+480, 175, 400);

//rect3
fill(255);  
noStroke(); 
rect(175, mouseY+360, 175, 120);


if (recth > 150) {
  speed1 = -3;
} 

if (recth < 120) {
  speed1 = 3;
} 

recth = recth + speed1;


if (rect1y > 295) {
  speed1 = -3;
} 

if (rect1y < 120) {
  speed1 = 3;
} 

rect1y = rect1y + speed1;

if (rect3y > 725) {
  speed1 = -3;
} 

if (rect3y < 485) {
  speed1 = 3;
} 

rect3y = rect3y + speed1;


//tri1
fill(0);  
noStroke(); 
triangle(0, 0, 0, mouseX-60,mouseX-100,0);

if (tri1 > 250) {
  speed2 = -1;
} 

if (tri1 < 210) {
  speed2 = 1;
} 

tri1 = tri1 + speed2;


//tri2
fill(0);  
noStroke(); 
triangle(525, 725, 525,mouseX+75,mouseX+75,725);

if (tri2x > 600) {
  speed3 = -1;
} 

if (tri2x < 515) {
  speed3 = 1;
} 

tri2x = tri2x + speed3;


if (tri2y > 400) {
  speed3 = -1;
} 

if (tri2y < 315) {
  speed3 = 1;
} 

tri2y = tri2y + speed3;


}