// Facial Features: https://media.istockphoto.com/id/2191419853/vector/hand-drawn-colorless-doodle-character-facial-parts-and-faces-vector-isolated-mouths-with.jpg?s=612x612&w=0&k=20&c=6BSnoSHZdCuT3TMR8t7v-PFWQSbDvYeeHYkaQqP_7yY=
// Vanity: https://c8.alamy.com/comp/3EEB9B5/hand-drawn-beauty-vanity-vector-line-art-3EEB9B5.jpg
// Mirror: https://thumbs.dreamstime.com/z/hand-drawn-round-decorative-frame-vector-illustration-hand-drawn-vector-illustration-round-decorative-frame-scrolling-456240930.jpg?ct=jpeg
// Frame: https://thumbs.dreamstime.com/z/hand-drawn-oval-mirror-landscape-vector-illustration-hand-drawn-vector-illustration-oval-mirror-reflecting-landscape-456357839.jpg?ct=
// Frame: https://thumbs.dreamstime.com/z/hand-drawn-lady-cameo-frame-vector-line-art-hand-drawn-vector-illustration-lady-cameo-portrait-frame-simple-black-ink-456353843.jpg?ct=jpeg
// Frame: https://thumbs.dreamstime.com/z/hand-drawn-vector-illustration-cameo-frame-portrait-two-children-simple-black-ink-line-art-style-thin-imperfect-brush-456255132.jpg?ct=jpeg
// Plant: https://thumbs.dreamstime.com/z/hand-drawn-potted-palm-tree-vector-drawing-hand-drawn-vector-illustration-tall-potted-palm-tree-simple-black-ink-line-456244712.jpg?ct=jpeg
// Music: https://youtu.be/kRHyoMJcMr8?si=yCDd_LfwtN1C8fnw

// Project 1: FUNity

// Important mechanism for the game
// Each click determines the random facial feature
let clickCount = 0;

// Array of images will continuously display until set to false
let eyesBoolean = true;
let noseBoolean = true;
let mouthBoolean = true;

let eyes;
let nose;
let mouth;

// Arrays for PNG images
let eyesArray = [];
let noseArray = [];
let mouthArray = [];

// Button text changes according to the stage in clickCount
let start = "start";

let bg;
let music;
let font;

async function setup() {
  
// loading background image, music, and font
  bg = await loadImage("assets/background_image.png");
  music = await loadSound("assets/bgMusic.mp3");
  font = await loadFont("assets/font/JustBreatheBd.otf");

// Facial features with array of drawn PNG graphics 
  eyesArray = [
    await loadImage("assets/eyes_01.png"),
    await loadImage("assets/eyes_02.png"),
    await loadImage("assets/eyes_03.png"),
    await loadImage("assets/eyes_04.png"),
    await loadImage("assets/eyes_05.png"),
    await loadImage("assets/eyes_06.png"),
    await loadImage("assets/eyes_07.png"),
    await loadImage("assets/eyes_08.png"),
    await loadImage("assets/eyes_09.png"),
    await loadImage("assets/eyes_10.png")
  ];

  noseArray = [
    await loadImage("assets/nose_11.png"),
    await loadImage("assets/nose_12.png"),
    await loadImage("assets/nose_14.png"),
    await loadImage("assets/nose_15.png"),
    await loadImage("assets/nose_16.png"),
  ];

    mouthArray = [
    await loadImage("assets/mouth_01.png"),
    await loadImage("assets/mouth_03.png"),
    await loadImage("assets/mouth_04.png"),
    await loadImage("assets/mouth_05.png"),
    await loadImage("assets/mouth_06.png"),
    await loadImage("assets/mouth_07.png"),
    await loadImage("assets/mouth_08.png"),
    await loadImage("assets/mouth_10.png"),
    await loadImage("assets/mouth_11.png"),
    await loadImage("assets/mouth_12.png")
  ];

  let canvas = createCanvas(800, 500);
  canvas.parent("project");
}

function draw() {

// If statement to assign eyes, nose, and mouth from the array with random()
  if (eyesBoolean) {
    eyes = random(eyesArray);
  }

  if (noseBoolean) {
    nose = random(noseArray);
  }
  
  if (mouthBoolean) {
    mouth = random(mouthArray);
  }

// Sizing and positioning the images and PNGs
  imageMode(CENTER);
  image(bg, width/2, height/2);
  image(eyes, 400, 180, 100, 55);
  image(nose, 400, 220, 25, 20);
  image(mouth, 400, 250, 80, 45);


// Button
    if (mouseX > 340 && mouseX < 460 && mouseY > 425 && mouseY < 475){
    fill(200);
  } else{
      fill(246, 193, 80);
  }

  noStroke();
  rectMode(CENTER);
  rect(width/2, 450, 125, 50, 25);

  fill(7, 67, 88);
  textFont(font);
  textSize(24);
  text(start, 370, 460);
}

// Program to stop the random() arrays with clickCount
function mouseClicked() {
  // Mouse clicks only count when clicked inside the button
  if (mouseX > 340 && mouseX < 460 && mouseY > 425 && mouseY < 475){
    clickCount = clickCount + 1;

    // First click turns "start" text to "stop" and the background music plays
    if (clickCount === 1) {
      start = "stop";
      music.play();
    }
  
    // Second click stops the eyes
    if (clickCount === 2) {
      eyesBoolean = false;
    }

    // Third click stops the nose
    if (clickCount === 3) {
      noseBoolean = false;
    }

    // Fourth click stops the mouth
    if (clickCount === 4) {
      mouthBoolean = false;
      start = "start";
    }

    // Fifth click turns "stop" text to "start" and restarts the game
    // setting all booleans to true will randomize the facial again
    // and setting clickCount = 0; will restart the program
    if (clickCount === 5) {
      clickCount = 0;

      eyesBoolean = true;
      noseBoolean = true;
      mouthBoolean = true;

      start = "start";
    }  
  }
}