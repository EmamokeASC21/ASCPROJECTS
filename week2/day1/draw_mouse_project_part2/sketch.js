function setup() {
    createCanvas(500, 500);
    background(220, 220, 220);
}

function draw() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    line(mouseX, mouseY, 300, 120, 100, 240);

}

function mouseClicked() {

}
