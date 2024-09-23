"use strict";
// Import p5 types if you're using modules. If p5 is included globally via a script tag, you can omit this.
function mySketch3(p) {
    let angle = 0;
    let canvas;
    // The setup function to initialize the sketch
    p.setup = () => {
        canvas = p.createCanvas(800, 400);
        // canvas.parent('sketch-container');  // Attach the canvas to the container, on a website
    };
    // The draw function to continuously run the sketch
    p.draw = () => {
        p.background(150, 200, 100);
        p.stroke(0);
        p.strokeWeight(2);
        p.noFill();
        p.beginShape();
        for (let x = 0; x < p.width; x += 10) {
            let y = p.map(p.sin(angle + x * 0.1), -1, 1, 0, p.height);
            p.vertex(x, y);
        }
        p.endShape();
        angle += 0.1;
    };
    // The mousePressed function to handle mouse interactions
    p.mousePressed = () => {
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            canvas === null || canvas === void 0 ? void 0 : canvas.elt.focus(); // Use optional chaining to safely access the element
            return false;
        }
    };
}
// Create a new p5 instance using mySketch3
const mySketch3Instance = new p5(mySketch3, 'mySketch3');
