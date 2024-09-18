//import p5 from "p5";
const mySketch2 = (p) => {
    let x = 100;
    let y = 100;
    // The setup function to initialize the sketch
    p.setup = () => {
        let canvas = p.createCanvas(400, 200); // Create a canvas that belongs to this sketch
        //canvas.parent('sketch-container');  // Attach the canvas to the container, on a website
    };
    // The draw function to continuously run the sketch
    p.draw = () => {
        p.background(50, 100, 200); // Set the background
        for (let i = 0; i < 10; i++) {
            p.fill(p.random(255), p.random(255), p.random(255));
            p.rect(p.random(p.width), p.random(p.height), p.random(20, 50), p.random(20, 50));
        }
        ;
    };
};
// Create a new p5 instance using mySketch
new p5(mySketch2, 'mySketch2');
