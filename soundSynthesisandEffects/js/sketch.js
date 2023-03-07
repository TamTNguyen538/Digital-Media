let initTone = true;
let image;

let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);

let noise = new Tone.Noise('pink').start();
let noiseEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(gain);

let noiseFilter = new Tone.Filter(700, "lowpass").connect(noiseEnv);
noise.connect(noiseFilter)

let noise2 = new Tone.Noise('pink').start();
let noiseEnv2 = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 2,
  sustain: 0.5,
  release: 3
}).connect(gain);

let noiseFilter2 = new Tone.Filter(200, "lowpass").connect(noiseEnv2);
noise.connect(noiseFilter2)

let noise3 = new Tone.Noise('pink').start();
let noiseEnv3 = new Tone.AmplitudeEnvelope({
  attack: 0.2,
  decay: 2,
  sustain: 1.0,
  release: 3
}).connect(gain);

let noiseFilter3 = new Tone.Filter(800, "lowpass").connect(noiseEnv3);
noise.connect(noiseFilter3)

function preload() {
    image = loadImage("assets/Grey.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(image);

  text('Press the spacebar to initialize the audio', 90, 90);
  text('Then click to see image', 120, 120);
}

function keyPressed() {
  if (keyCode === 32 && initTone === true) {
    console.log('spacebar pressed');
    Tone.start();
    initTone = false;
  }
}

function mousePressed() {
  console.log('pressed');
  noiseEnv.triggerAttackRelease(0.5);
  noiseEnv2.triggerAttackRelease(0.5, '+0.8');
  noiseEnv3.triggerAttackRelease(0.5, '+1.6');
  image = loadImage("assets/bowserHead.png");
}