//import p5 from "p5";
const mySketch3 = (p) => {
    let angle = 0;
    let canvas; // Declare the canvas variable explicitly
    // The setup function to initialize the sketch
    p.setup = () => {
        canvas = p.createCanvas(800, 400);
        //canvas.parent('sketch-container');  // Attach the canvas to the container, on a website
    };
    p.draw = function () {
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
    p.mousePressed = function () {
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            canvas?.elt.focus(); // Use .elt to access the native HTML element
            return false;
        }
    };
};
// Create a new p5 instance using mySketch
//new p5(mySketch3);
new p5(mySketch3, 'mySketch3');
