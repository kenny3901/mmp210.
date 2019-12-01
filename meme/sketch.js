var img;

function preload() {
    img = loadImage("dab.jpeg");
}

function setup(){
    createCanvas(640, 480);
}

function draw(){
    
    image(img,0,0, width, height);
    textSize(20);
    text("When you call someone a boomer", 20, 20);
    

}
