function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
}

function draw() {
  background(200,100,200);

  
  ellipse(200,100,50,50);
  ellipse(400,105,50,50);
  
  push();
  fill(0);
  ellipse(200,100,10,10);
  ellipse(400,105,10,10);
  pop();
  

  //drawing the nose
  //triangle(300,100,290,200,310,200);
  beginShape();
  vertex(295,100);
  vertex(280,200);
  vertex(300,205);
  vertex(320,200);
  vertex(305,100);
  endShape(CLOSE);

  arc(300,220,200,40,0,PI,PIE,);

  line(175,65,225,65);
  line(375,70,425,65);


}
