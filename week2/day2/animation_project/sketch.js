let xPos = 250;
let yPos = 50;
 
function setup() {
   createCanvas(500, 500);
   background(0);
}
 
function draw() {
   background(0, 20);
    ellipse(xPos, yPos, 50, 50);
 
   yPos += 3;
 

   
}

function mouseClicked() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill (r, g, b);
    ellipse(xPos, yPos, 50, 50);

    if (yPos > 525) {
        yPos = -50;
    }


}


