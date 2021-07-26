let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = 70;
let diameter = 70;
let xBallChange = 15;
let yBallChange = 15;
let xPaddle;
let yPaddle;
let paddleWidth = 100;
let paddleHeight = 25;

let started = false;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(28, 252, 3);
  
	xBall += xBallChange;
	yBall += yBallChange;
	if (xBall < diameter || 
      xBall > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (yBall < diameter || yBall > windowHeight - diameter) {
    yBallChange *= -1;
	}

  
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter) >= yPaddle)) {
    xBallChange *= -1;
    yBallChange *= -1;
    score++;
  }
  
  
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;
  }
  
  fill(235, 52, 75);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

  fill(0);
  textSize(50);
	text("Score: " + score, 10, 50);

    if (keyIsDown(LEFT_ARROW)) {
        xPaddle -= 17;
      } else if (keyIsDown(RIGHT_ARROW)) {
        xPaddle += 17; 
      }
      if (yBall + diameter >= windowHeight) {
        background(220, 220, 220);
         xBallChange = 0;
         yBallChange = 0;
           textSize(100);
           textAlign(CENTER);
           text("GAME OVER", 800, 450);
     
    

      }

    }


