/*
References for these codes:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial; // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem14101'; // fill in your serial port name here
//var currentString = serial.readLine(); trim(currentString);// variable to hold the input data from Arduino
var inData;
var smoothedData = [0];
var inString;
var rightSlider; // add a slider component
var outData; // for data output

var minWidth = 600; //set min width and height for canvas
var minHeight = 400;
var width, height; // actual width and height for the sketch
var bg;
var flag;


function preload() {
    bg = loadImage("bg.jpg");
    flag = loadImage("flag.png");
}




// The following codes needed to be added to the previous sketch for Part 2

function setup() {

    rightSlider = createSlider(0, 255, 0); // indicate the value range for slider
//   rightSlider = creatCanvas(0, 255, 0);
//   creatCanvas. position(width / 3 + (width / 3 - 300) / 4, height - 50);
//    noStroke();
    rightSlider.position(width / 2 + (width / 2 - 300) / 2, height - 100);
     fill(0, 165, 0);
    //ellipse(width / 4, height / 2, inData, inData);
    rect(width / 2, height / 3, inData, inData);
//    rightSlider.style('width', '300px');
//    rightSlider.background('bg');
//    rightSlider.bg = ('flag.png');

    // set the canvas to match the window size
    if (window.innerWidth > minWidth) {
        width = window.innerWidth;
    } else {
        width = minWidth;
    }
    if (window.innerHeight > minHeight) {
        height = window.innerHeight;
    } else {
        height = minHeight;
    }

    //set up canvas
    createCanvas(width, height);
    noStroke();

    //set up communication port
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('list', printList); // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen); // callback for the port opening
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose); // callback for the port closing

    serial.list(); // list the serial ports
    serial.open(portName); // open a serial port
    
//    frameRate(5);
}

function draw() {
    
    
      // set background to black
    background(100);
    
    //rightSlider background

    image(flag, width / 2 + (width / 3 - 310) / 2, height - 280);
    
    //image(bg, width / 1 + (width / 2) / 2, height);
    

  

    // drawing the left side to visualize my LED light
//    var leftBrightness = map(inData, 0, 255, 0, 255); // map input to the correct range of brightness
    
    var smoothedAverage = smoothedData.reduce((s, n) => { return s + n;} ) / (smoothedData.length - 1);
    var leftBrightness = map(smoothedAverage, 0, 255, 0, 255); // map input to the correct range of brightness
    
    
    
    fill(leftBrightness); // transfer the brightness to brightness of the color used for drawing
    fill(254, 139, 54);
    image(bg, 0 , 0, width/2, height);
    
//    rect( 0, 0, width / 2, height); // left half
    
    
    fill(254, 139, 54);
    ellipse(width / 4, height / 2, inData, inData);
    
    //Image(bg, width / 2 + (width / 2 + 150) / 2, height - 150);

    // draw the text - left
    var textLColor = map(leftBrightness, 0, 255, 255, 0); // inverse the color for drawing the text on background
    fill(textLColor);
    textSize(16);
    text("THE OTHER SIDE", 30, 30);
    textSize(12);
    text("BRIGHTNESS LEVEL: " + inData, 30, 50); // displaying the input

    // right side: read the value from browser
    var rightBrightness = map(rightSlider.value(), 0, 255, 0, 255); // convert slider input to brightness
    fill(rightBrightness); // change the visualization in p5
     fill(0, 165, 0);
    // BD flag
    rect(width / 2 + 75, height / 6 , 400, 200);
    fill(255, 0, 0)
    ellipse(width /3 + 510, height / 2 - 135 , 120, 120)
    
    

    outData = rightBrightness; // setup the serial output
//    serial.write(outData); // write to serial for Arduino to pickup
//    console.log(outData);

    var textRColor = map(rightBrightness, 0, 255, 255, 0); // draw the text
    fill(textRColor);
    textSize(16);
    text("ME", width - 70, 30);
    textSize(12);
    text("BRIGHTNESS LEVEL: " + rightBrightness, width - 170, 50);

    // draw the separator between frames
    //    push();
    fill(255);
    rect(width / 2 - 0.5, 0, 1, height);
    //    pop();
}

// Following functions print the serial communication status to the console for debugging purposes

function printList(portList) {
    // portList is an array of serial port names
    for (var i = 0; i < portList.length; i++) {
        // Display the list the console:
        print(i + " " + portList[i]);
    }
}

function serverConnected() {
    print('connected to server.');
}

function portOpen() {
    print('the serial port opened.')
}

function serialEvent() {
    //    inData = Number(serial.read());
    inString = serial.readLine();
    if (inString.length > 0) {
        inData = Number(inString);
        smoothedData.push(inData);
        if (smoothedData.length > 20) smoothedData.shift();
    }
    //currentString = (serial.readLine()); 
}

function serialError(err) {
    print('Something went wrong with the serial port. ' + err);
}

function portClose() {
    print('The serial port closed.');
}
