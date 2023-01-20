function setup() {
  createCanvas(650, 300);
}

function draw() {
  background(0);

  let c = color(255, 255, 100);
  fill(c);
  noStroke();
  arc(160, 150, 250, 250, (5*PI)/ 4, (3*PI) / 4);

  c = color(255, 44, 44);
  fill(c);
  noStroke();
  square(360, 20, 250, 200, 200, 0, 0);

  c = color(255, 255, 255);
  fill(c);
  noStroke();
  ellipse(420, 140, 80, 80);
  ellipse(540, 140, 80, 80);

  c = color(0, 86, 199);
  fill(c);
  noStroke();
  ellipse(420, 140, 45, 45);
  ellipse(540, 140, 45, 45);
  
}
