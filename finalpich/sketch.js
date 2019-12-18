/*
    final project presentation
    11.19.2019
    
    sensor
    interaction
    theme
*/

var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

var cat;

function preload() {
    cat = loadImage("cat.jpg");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(51);

    if (slideNumber == 0) {
        // content for slide number 0
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width/2, height/2);

        textSize(30);
        text("by Alam & Kenan,", width/2, height/2 + 50);

    } else if (slideNumber == 1) {
        // content for slide number 1

        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Potentiometer", width/2, 200);

        
        
        //ellipse(200, 90, 100, width/2, height/2);
        fill(255);
        textSize(20);
        line(0, 37, width, 37);
        textAlign(CENTER, CENTER);
        text("The user use the potentiometer to change the screen brightness durker to light and change the cicle size from center to the border. ", width/2, height - 300, +180);

    } 
    
    
    else if (slideNumber == 4) {

        // theme
        image(cat, 0, 0, width, height);
        fill(255);
        text("Theme", width/2, height/2);
    }
    
    else if (slideNumber == 3) {

        // theme
        image(cat, 0, 0, width, height);
        fill(255);
        text("Theme", width/2, height/2);
    }

    
    else if (slideNumber == 2) {

        // theme
        image(cat, 0, 0, width, height);
        text("Theme", width/4, height/2);
    }


    /* drawing buttons */

    // next btn
    if (slideNumber < totalSlides - 1,2,3,4) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }


    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }


}

function mousePressed() {

    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }

    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}