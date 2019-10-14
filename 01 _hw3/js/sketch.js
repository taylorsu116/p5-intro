let x = 0;
let y = 0;
let spacing = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  spacing - spacing + random(-2,2);
  
   x=0;
  while ( x < width){
    if (mouseX < 1){
      x = x + 1;
    } else{
      x= x + mouseX;
    }
    y=25;
    while (y<height){
    fill(x, y, 200);
    noStroke();
    ellipse(x,y,25,25);
      y = y+ spacing ;
    }
  }
}