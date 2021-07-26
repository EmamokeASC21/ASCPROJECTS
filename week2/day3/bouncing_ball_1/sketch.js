
let xPos = 25;
let direction = 4;
 
function setup() {
   createCanvas(500, 500);
   background(0);
}
 
function draw() {
   background(0);
 
   fill(0, 0, 255);
   ellipse(xPos, 250, 50, 50);
 
   xPos += 3 * direction;

    if (xPos > 475 || xPos < 25) {
      direction = direction * -1;
  }

 
}

