function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
 }
  
 function draw() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random (120, 180);
    fill(r, g, b, opacity);
    noStroke();
  
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);
    square(mouseX + offSetX, mouseY + offSetY, size, size);
 }
  
 function mouseClicked() {
 }
 
 