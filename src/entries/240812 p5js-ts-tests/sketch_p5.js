"use strict";
// Import p5 types if you're using modules. If p5 is included globally via a script tag, you can omit this.
function mySketch(p) {
    let x = 100;
    let y = 100;
    // The setup function to initialize the sketch
    p.setup = () => {
        let canvas = p.createCanvas(400, 200); // Create a canvas that belongs to this sketch
    };
    // The draw function to continuously run the sketch
    p.draw = () => {
        p.background(220); // Set the background
        p.fill(100, 200, 120); // Set the fill color to red
        p.ellipse(x, y, 50, 50); // Draw an ellipse
    };
}
// Create a new p5 instance using mySketch
const mySketchInstance = new p5(mySketch, 'mySketch');
