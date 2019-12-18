const int led1Pin =  9; // pin number for LED output
const int led2Pin = 10;// set up pin for second LED
const int sensorPin = 0; // pin number for sensing potentiometer
int brightness = 0;    // variable for indicating how bright the LED is
int led2brightness = 0; // set up another variable for visualize second LED's brightness
int incomingByte; // variable for reading from serial port - from p5.js


void setup() {
  pinMode(led1Pin, OUTPUT);  // Set up the LED pin to be an output:
  Serial.begin(9600); // initialize the serial for communication
}

void loop() {
  int sensorValue;

  sensorValue = analogRead(sensorPin); // read from the potentiometer
  brightness = map(sensorValue, 0, 1023, 0, 255); // map the value from potentiometer (range from 0 to 1023) to the brightness (from 0 to 255)
  Serial.println(brightness); // write the brightness to the serial port to let p5.js read this value

  if (Serial.available() > 0) {   // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    led2brightness = map(incomingByte, 0, 255, 0, 255); // map the input value to the brightness for second LED
  } else { }

  analogWrite(led2Pin, led2brightness); // write the brightness to the led pin 2


  if (sensorValue >= 0) {
    analogWrite(led1Pin, brightness);  // turn the LED on with certain brightness
  } else {
    digitalWrite(led1Pin, LOW);  // turn the LED off
  }
}
