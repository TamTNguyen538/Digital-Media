function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300);
  let c = color(255, 0, 0, 100);
  fill(c);
  noStroke();
  ellipse(200, 140, 220, 220);

  c = color(0, 0, 255, 100);
  fill(c);
  noStroke();
  ellipse(130, 260, 220, 220);

  c = color(0, 255, 0, 100);
  fill(c);
  noStroke();
  ellipse(270, 260, 220, 220);
}
