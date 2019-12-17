var img;
var img2;

function preload() {
	img = loadImage("2.jpg");
    img2 =  loadImage("unknown.jpg");
}

function setup() {
    createCanvas(796, 796);
}

function draw(){
	image(img2, 0, 0);
    textSize(40);
    text("If water is wet",10,50);
if (mouseIsPressed)
    image (img,0,0);
    
	}	