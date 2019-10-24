/* self portrait
*/

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    
}

function draw() {
    var x = mouseX;
	var y = mouseY;
	var offset = 20;
    var r = 250; // red;
	var g = mouseX; // green
	var b = mouseY; // blue
	fill(r, g, b);
//eyes
    background("#0FFF00");
    fill(r,g,b);
    stroke("#000000");
    strokeWeight(10);
    ellipse(x+100,y,50,50);
    ellipse(x,y,50,50);
//mouth
    fill(r,g,b);
    noStroke();
    ellipse(250,250, 50, 50);
//head
    noFill();
    stroke("#000000");
    strokeWeight(10);
    ellipse(250, 200, 250, 250);
//eyebrow
    triangle(300, 100, 300, 100, 200, 100);
    
    fill("#000000");
    triangle(100, 325, 400, 325, 250, 400);
fill(r,b,g)    
rect(x+100, y+300, 50, 200);
rect(x, y+300, 50, 200);
}

