function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 35, 151);

  let c = color(14, 132, 22)
  fill(c);
  strokeWeight(6);
  stroke(255, 255, 255);
  ellipse(200, 200, 180, 180);

  c = color(255, 0, 0);
  fill(c);
  strokeWeight(5);
  stroke(255, 255, 255);
  beginShape();
  vertex(200, 105);
  vertex(230, 175); 
  vertex(290, 175);
  vertex(240, 215); 
  vertex(255, 270);
  vertex(200, 235);
  vertex(145, 270);
  vertex(165, 215);
  vertex(110, 175);
  vertex(175, 175);
  vertex(200, 105);
  endShape();
  
}
