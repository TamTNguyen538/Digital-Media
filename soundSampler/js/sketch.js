let sounds = new Tone.Players({
  "Note 1": "sounds/NoteE1.mp3",
  "Note 2": "sounds/NoteE2.mp3",
  "Note 3": "sounds/NoteE3.mp3",
  "Note 4": "sounds/NoteE4.mp3",
  "Note 5": "sounds/NoteE5.mp3",
  "Note 6": "sounds/NoteE6.mp3",
  "Note 7": "sounds/NoteE7.mp3",
  "Note 8": "sounds/NoteE8.mp3",
  "Note 9": "sounds/NoteE9.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames1 = ["Note 1", "Note 2", "Note 3", "Note 4"];
let soundNames2 = ["Note 5", "Note 6", "Note 7", "Note 8"];
let soundName = ["Note 9"];
let buttons = [];


let dSlider;
let fSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames1.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index * 100 + 20, index + 150);
    buttons[index].mousePressed( () => buttonSound((word)));
  })

  soundNames2.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index * 100 + 20, index + 300);
    buttons[index].mousePressed( () => buttonSound((word)));
  })

  soundName.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index * 100 + 168, index + 360);
    buttons[index].mousePressed( () => buttonSound((word)));
  })

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
  textSize(30);
  background(value1, value2, value3);
  text('Play Each Note in Order', 40, 40);
  textSize(12);
  text('Press 3 times', 10, 145);
  text('Press 1 time', 115, 145);
  text('Press 3 times', 210, 145);
  text('Press 1 time', 311, 145);
  text('Press 3 times', 10, 295);
  text('Press 1 time', 115, 295);
  text('Press 3 times', 210, 295);
  text('Press 1 time', 311, 295);
  text('Press for Full Song', 145, 355);
  text('Control the Delay Time', 5, 395);
  text('Control the Feedback Value', 135, 395);
}

function buttonSound(whichSound) {
  sounds.player(whichSound).start();
}

function mousePressed() {
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
