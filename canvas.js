function setup() {
  createCanvas(800, 400);
  background('lime');
}

function draw() {
  shapeWidth = 350;
  circle(width/4, height/2, shapeWidth);
  rect(width/2+(width/2-shapeWidth)/2,(width/2-shapeWidth)/2,shapeWidth)
}