let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x=0;
  while ( x < width){
    if (mouseX < 1){
      x = x + 1;
    } else{
      x= x + mouseX;
    }
    fill(101);
    stroke(255);
    ellipse(x,150,15,15);
  }
}