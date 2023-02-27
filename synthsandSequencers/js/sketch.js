const synth = new Tone.PluckSynth()
const synth2 = new Tone.PolySynth()
synth2.set({ detune: +500 });
let keyNotes = {

  'q': 'C2',
  'w': 'D2',
  'e': 'E2',
  'r': 'F2',
  't': 'G2',
  'y': 'A2',
  'u': 'B2',
  'i': 'C3'

}

const delay = new Tone.FeedbackDelay("8n", 0.5);

let dSlider; 
let fSlider;

function setup() {
  createCanvas(400, 400);
  synth.connect(delay);
  synth2.connect(delay);
  delay.toDestination();

  dSlider = createSlider(0, 1, 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0, 1, 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

let value1 = 300;
let value2 = 300;
let value3 = 300;

function draw() {
  background(value1, value2, value3);
  textSize(40);
  text('Synths Player', 70, 50);
  textSize(20);
  text('For Pluck and Poly Synth use the keys Q-I', 10, 150);
  textSize(12);
  text('Control the Delay Time', 5, 395);
  text('Control the Feedback Value', 135, 395);
}

function keyPressed() {
  let whatNote = keyNotes[key];
  synth.triggerAttackRelease(whatNote, "8n"); 
  synth2.triggerAttackRelease([whatNote, whatNote, whatNote], 1);
  if (value1 != 0) {
    value1 = random(50,300);
  } 
  if (value2 != 0) {
    value2 = random(50,300);
  } 
  if (value3 != 0) {
    value3 = random(50,300);
  } 
}