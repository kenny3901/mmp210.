/* self portrait
*/

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
   var eye = 25;
    var eye2 = 100;
    var headsize = 200;
//eyes
    background("#0FFF00");
    fill("#77640E");
    stroke("#000000");
    strokeWeight(10);
    ellipse(200,150,eye);
    ellipse(300,150,eye2);
//mouth
    fill("#000000");
    noStroke();
    ellipse(250,250, 50, 50);
//head
    noFill();
    stroke("#000000");
    strokeWeight(10);
    ellipse(250, 200, headsize);
//eyebrow
    triangle(300, 100, 300, 100, 200, 100);
    
    fill("#000000");
    triangle(100, 325, 400, 325, 250, 400);
fill("#000000")    
rect(130, 370, 50, 200);
rect(300, 375, 50, 200);}

