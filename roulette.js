/*Her deklerer vi vores variabler*/

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
let farve;
let farveValgt;



/*Her definere vi vores setup, som kun bliver kørt en gang */
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(1, 85, 54)
}


/*Denne funktion køres hvert frame*/
function draw() {
  knapper()
  bet()
  
  /*NumSegments er vores divident til antal felter*/
  let numSegments = 18;
  /*Her tager vi grader som er 360, (En cirkel som er rund), og dividere med antal fælter*/
  let anglePerSegment = 360 / numSegments;
  /*Her har vi et for loop som ind deler felterne til enten rød eller sort*/
  for (let i = 0; i < numSegments; i++) {
    let segmentColor = i % 2 == 0 ? color(0) : color(255, 0, 0);
    fill(segmentColor);
    stroke(0);
    strokeWeight(2);
    let startAngle = i * anglePerSegment;
    arc(width/2, height/2, 300, 300, startAngle, startAngle + anglePerSegment);
  }
  /*Her tjekker vi om hjulet spinnes*/
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
      /*Her udregner vi ud fra vinkel om hvilken farve kuglen lander på udfra vinklen der angives ved start*/
      let resultAngle = floor(angle / anglePerSegment) * anglePerSegment;
      let resultColor = resultAngle % (2 * anglePerSegment) < anglePerSegment ?  resultText = "Sort": resultText = "Rød";
      console.log(resultText)
      array.push(resultText)
      console.log(array)
      background(1, 85, 54)
      ay = 50
      colors()

    }
  }
  fill(255)
  /*Her opdateres resultatet*/
  text(resultText, 10,25)
  textSize(24)

  fill(255)
  saldo = text("Saldo: " + cash, 10, height - 10)
  




}
/*Funktionen her indeholder alle vores styled knapper og labels*/
function knapper(){
  spinknap = createButton("Spin")
  spinknap.position(width / 2 - 22, 550)
  spinknap.mousePressed(spinHjul)
  spinknap.style('border-radius', '5px')
  spinknap.style('background-color', color(255,140,0))
  spinknap.style('border', 'none')
  spinknap.style('font-size', '18px')

  betsort = createButton("10kr")
  betsort.position(width / 2 - 50, 600)
  betsort.mousePressed(farveValgt = "Sort")
  betsort.style('border-radius', '5px')
  betsort.style('background-color', color(0))
  betsort.style('border', 'none')
  betsort.style('font-size', '18px')

  betrød = createButton("10kr")
  betrød.position(width / 2 + 10, 600)
  betrød.mousePressed(farveValgt = "Rød")
  betrød.mousePressed(spinHjul)
  betrød.style('border-radius', '5px')
  betrød.style('background-color', color(255,0,0))
  betrød.style('color', color(255,0,0))
  betrød.style('border', 'none')
  betrød.style('font-size', '18px')
}

function bet(){
  if(farveValgt){
    beløb = createInput("Indtast beløb")
    beløb.position(width / 2 - 50, 650)
    console.log(farveValgt)
  }
}

function udbetal(){

}
/*Her Her tjekker vi for hvilken farve kuglen lander på*/
function colors(){
  if(array.length < 10){
    for(let i = 0; i < array.length; i++){
      ay += 28
      c = array[i]
      /*Her tjekkes for om c fra vores array er sort*/
      if(c == "Sort"){
        fill(0)
        rect(width - 100, ay, 50,25)
      /*Her tjekkes c for array farve rød*/
      } else if(c == "Rød"){
        fill(255,0,0)
        rect(width - 100, ay, 50,25)
      }
    }
  } else {
    while(array.length > 0){
      array.pop()
    }
  }
}


/*Denne funktion køres når vi trykker på knappen for at spinne hjulet*/
function spinHjul() {
  if(farveValgt){
    if (!spinning) {
      speed = random(20, 25);
      spinning = true;
      result = -1;
      resultText = ""
      ay = 50
      background(1, 85, 54)
      colors()
    }
  }
}
