let angle = 0;
let speed = 0;
let spinning = false;
let result = -1;
let resultText;
let resultatCheck;

let spinTime;

let array = []
let ay = 50


let cash = 1000




function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {


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
    spinTime = random(0.950, 0.980)
    speed *= spinTime;
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
      array.push(resultText)
      console.log(array)
      background(255)
      ay = 50
      colors()

    }
  }
  fill(255)
  text(resultText, 10,25)
  textSize(24)

  fill(255)
  text("Penge: " + cash, 250, 25)
  




}

function colors(){
  if(array.length < 10){
    for(let i = 0; i < array.length; i++){
      ay += 25
      c = array[i]
      if(c == "Sort"){
        fill(0)
        rect(370, ay, 25,20)
      } else if(c == "Rød"){
        fill(255,0,0)
        rect(370, ay, 25,20)
      }
    }
  } else {
    while(array.length > 0){
      array.pop()
    }
  }
}



function mousePressed() {
  if (!spinning) {
    speed = random(20, 25);
    spinning = true;
    result = -1;
    resultText = ""
    ay = 50
    background(255)
    colors()
  }
}
