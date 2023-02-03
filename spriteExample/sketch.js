let spriteSheet;
let sx = 0;
let sy = 0;
let sw = 80;
let sh = 80;
let u = 0, v = 0;
let animationLength = 9;

function preload(){
  spriteSheet = loadImage("assests/SpelunkyGuy.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(220);
  
  image(spriteSheet,200,200,80,80,u*sw,v*sh,sw,sh);
  u +=1;

}
