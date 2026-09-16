let answerResults = ["어", "아니", "maybe", "에...", "ask yourself", "Google it", "ask ChatGPT", "나도 몰라"];

let answer = 8;

function setup() {
  let canvas = createCanvas(500, 700);
  canvas.parent('test');
}

function draw() {
  background(40);

  fill(0);
  ellipse(width/2, 300, 300);

  fill(15);
  ellipse(width/2, 300, 150);

  fill(200, 0, 255);
  textSize(25);
  textAlign(CENTER);
                              //text("8", width/2, 325);
  text(answer, width/2, 310);

  // button
  fill(0);

    if (mouseX > 175 && mouseX < 325 && mouseY > 490 && mouseY < 555){
    fill(200);
  } else{
      fill(100);
  }

  noStroke();
  rectMode(CENTER);
  rect(width/2, 525, 150, 60, 15);

  fill(0, 175);
  textSize(28);
  text("ask me", width/2, 535);
}

function mousePressed() {
  if (mouseX > 175 && mouseX < 325 && mouseY > 490 && mouseY < 555){
  answer = random(answerResults);
  }
  //answer = answerResults[int(random(6))];
}