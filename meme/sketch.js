var img;

function preload() {
	img = loadImage("dab.jpg");
}

function setup() {
    createCanvas(796, 796);
}

function draw(){
	image(img, 0, 0);
    textSize(40);
    stroke('white');
    strokeWeight(30);
    text("When you call someone a boomer", 60, 60);
}