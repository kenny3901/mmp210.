/*
making custom function
*/

function setup() {
    createCanvas(640,360);
}

function draw(){
    background(220);
    
button();

function button(){
       var x =200;
    var y=200;
    var s=100; //size
    
    var d = dist(x,y,mouseX, mouseY);
    
    if (d < s/2){
        fill('gold');
        } else {
            fill('plum');
        }
    ellipse(x,y,s);
    
}