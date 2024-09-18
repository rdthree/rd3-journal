
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth / 2, window.innerHeight / 3);
    p.background(0);
  };

  p.draw = () => {
    p.strokeWeight(p.random(1, 5));
    p.stroke(p.random(255), p.random(255), p.random(255), p.random(50, 200));
    p.line(
      p.random(p.width),
      p.random(p.height),
      p.random(p.width),
      p.random(p.height)
    );

    // Optional: Add some shape elements for more "rad" effects
    if (p.frameCount % 60 === 0) {
      p.fill(p.random(255), p.random(255), p.random(255), 150);
      p.noStroke();
      p.ellipse(p.random(p.width), p.random(p.height), p.random(50, 100));
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

//const myp5 = new p5(sketch);
//new p5(sketch);
//new p5.default(sketch);
//let myp5 = new p5(sketch);

new p5(sketch, 'sketch-container');

console.log("loaded sketch.js");