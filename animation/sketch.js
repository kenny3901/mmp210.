var r, g, b;

function preload() {
    img = loadImage("2.jpg");
}

function setup() {
    createCanvas
        (944, 728);
    r = random(100);
    g = random(225);
    b = random(27);
}

function draw() {
    if (frameCount % 15 === 0) {
        r = random(100);
        g = random(255);
        b = random(100);
    }
    fill(r, g, b);
    noStroke();
    rect(0, 0, 944, 728);
    fill(0,0,0);
    textSize(100);
    strokeWeight(10);
    text("Click Here", 100, 400);
    if (mouseIsPressed)
        image(img, 0, 0);
    fill(r,g,b)
    textSize(100);
    text("OOGA BOOGA", 125, 100);
}
