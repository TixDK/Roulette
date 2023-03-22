let angle = 0;
let speed = 0;
let spinning = false;
let result = -1;
let resultText;
let resultatCheck;



function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  let numSegments = 18;
  let anglePerSegment = 360 / numSegments;
  for (let i = 0; i < numSegments; i++) {
    let segmentColor = i % 2 == 0 ? color(0) : color(255, 0, 0);
    fill(segmentColor);
    stroke(0);
    strokeWeight(2);
    let startAngle = i * anglePerSegment;
    arc(width/2, height/2, 300, 300, startAngle, startAngle + anglePerSegment);
  }

  if (spinning) {
    speed *= 0.95;
    angle += speed;
    fill(255);
    let x = width/2 + 130 * cos(angle);
    let y = height/2 + 130 * sin(angle);
    ellipse(x, y, 20);
    if (speed < 0.01) {
      spinning = false;
      let resultAngle = floor(angle / anglePerSegment) * anglePerSegment;
      let resultColor = resultAngle % (2 * anglePerSegment) < anglePerSegment ?  resultText = "Sort": resultText = "Rød";
      console.log(resultText)

    }
  }
  fill(0)
  text(resultText, 10,50)
  textSize(32)
  



  if (result != -1) {
    fill(result);
    ellipse(width/2, height/2, 100);
    
  }
}



function mousePressed() {
  if (!spinning) {
    speed = random(20, 25);
    spinning = true;
    result = -1;
    resultText = ""
  }
}
