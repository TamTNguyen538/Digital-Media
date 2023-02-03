let mikeImg;
let x = 200; 
let y = 200; 
let r = 0; 
let startTime = 15;
let timeRemaning = 15;
let score = 0;
let topScore = 0; 
let previousScores = [];

function preload() {
  mikeImg = loadImage("assets/image.png");
  
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  textFont('Courier New');
  textStyle(BOLD);
  textSize(20);

  if(r >= 360) {
    r -= 360;
  }

  push();
  translate(x,y);
  rotate(r);
  r += 5;
  scale(0.04);
  image(mikeImg, 0, 0,);
  pop();

  text("Time: " + ceil(timeRemaning),width-120,50);
  timeRemaning -= deltaTime / 1000;

  if(timeRemaning < 0) {
    timeRemaning = startTime;
    topScore = max(topScore, score);
    previousScores.push(score);
    score = 0;
  }

  let scoreY = 50;
  text("Score: " + score, 20, 50);
  //print("r: ", r);
  text("Top Score: " + topScore,130, height -20);

  
  for(let i=previousScores.length-1; i >= max(0, previousScores.length-3); i--) {
    scoreY += 20;
    text(previousScores[i], 20, scoreY);
  }
  
}
     

function keyTyped() {
  if (key === ' ') {
    print("space!");
    if(r > 350 || r < 10) {
      score += 10;
    }
  }
}
