function setup() {
  createCanvas(1050, 600);
  background(300);
  paintColor = color(50);

}

function draw() {
  stroke(0);
  strokeWeight(10);

  if (mouseIsPressed) {
    if (mouseX <= 35) {
      if (mouseY <= 35) {
        paintColor = color(255, 0, 0);
      } else if (mouseY <= 70) {
        paintColor = color(255, 120, 0);
      } else if (mouseY <= 105) {
        paintColor = color(244, 255, 71);
      } else if (mouseY <= 140) {
        paintColor = color(115, 255, 73);
      } else if (mouseY <= 175) {
        paintColor = color(90, 255, 255);
      } else if (mouseY <= 210) {
        paintColor = color(0, 26, 255);
      } else if (mouseY <= 245) {
        paintColor = color(251, 104, 255);
      } else if (mouseY <= 280) {
        paintColor = color(122, 68, 27);
      } else if (mouseY <= 315) {
        paintColor = color(300, 300, 300);
      } else if (mouseY <= 350) {
        paintColor = color(0, 0, 0);
      } 

    }

    stroke(paintColor);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

  stroke(300);
  strokeWeight(2);

  fill(255, 0, 0);
  rect(0, 0, 35, 35);

  fill(255, 120, 0);
  rect(0, 35, 35, 35);

  fill(244, 255, 71);
  rect(0, 70, 35, 35);

  fill(115, 255, 73);
  rect(0, 105, 35, 35);

  fill(90, 255, 255);
  rect(0, 140, 35, 35);

  fill(0, 26, 255);
  rect(0, 175, 35, 35);

  fill(251, 104, 255);
  rect(0, 210, 35, 35);

  fill(122, 68, 27);
  rect(0, 245, 35, 35);

  fill(300, 300, 300);
  rect(0, 280, 35, 35);

  fill(0, 0, 0);
  rect(0, 315, 35, 35);

  print(paintColor);

}
