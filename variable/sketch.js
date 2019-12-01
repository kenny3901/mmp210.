/* self portrait
*/

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
   var leftEyeSize = 25;
    var rightEyeSize = 100;
    var headsize = 200;
    var x = 250;
    var y = 50;
    var X = 150;
    var Y = 200;
    var z = 300;
    var Z = 100;
    var a = 325;
    var A = 400;
//eyes
    background("#0FFF00");
    fill("#77640E");
    stroke("#000000");
    strokeWeight(10);
    ellipse(Y,X,leftEyeSize);
    ellipse(z,X,rightEyeSize);
//mouth
    fill("#000000");
    noStroke();
    ellipse(x,x, y, y);
//head
    noFill();
    stroke("#000000");
    strokeWeight(10);
    ellipse(x, Y, headsize);
//eyebrow
    triangle(z, Z, z, Z, Y, Z);
    
    fill("#000000");
    triangle(Z, a, A, a, x, A);
fill("#000000")    
rect(130, 370, y, Y);
rect(z, 375, y, Y);}

