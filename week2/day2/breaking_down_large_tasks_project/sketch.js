function setup() {
    createCanvas(500, 500);
    background(0);
    fill (255, 0, 0);
    square(200, 50, 100);   
    fill (0, 255, 0);
    square(200, 200, 100);
    fill (0, 0, 255);
    square(200, 350, 100);
    
}

function draw(){
}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill (r, g, b);
square(200, 50, 100);
square(200, 200, 100);
square(200, 350, 100);
}