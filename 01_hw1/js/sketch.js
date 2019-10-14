let y = 0;
let spacing = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  spacing = spacing + random(-2, 2);
  
  stroke(255);
  strokeWeight(2);
  
  x=50;
  while (x< width){
    line(x, 0, x, height);
    x=x + spacing ;
  }
  
  y=50;
  while (y< height){
    line(0, y, width, y);
    y= y+ spacing ;
  }
}