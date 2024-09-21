// Import p5 types if you're using modules. If p5 is included globally via a script tag, you can omit this.
function mySketch2(p: typeof p5) {
    let x: number = 100;
    let y: number = 100;
    let canvas: any; // Declare the canvas variable explicitly

    // The setup function to initialize the sketch
    p.setup = () => {
        canvas = p.createCanvas(400, 200); // Create a canvas that belongs to this sketch
        // canvas.parent('sketch-container');  // Attach the canvas to the container, on a website
    };

    // The draw function to continuously run the sketch
    p.draw = () => {
        p.background(50, 100, 200); // Set the background
        for (let i: number = 0; i < 10; i++) {
            p.fill(p.random(255), p.random(255), p.random(255));
            p.rect(
                p.random(p.width),
                p.random(p.height),
                p.random(20, 50),
                p.random(20, 50)
            );
        }
    };
}

// Create a new p5 instance using mySketch2
const mySketch2Instance = new p5(mySketch2, 'mySketch2');
