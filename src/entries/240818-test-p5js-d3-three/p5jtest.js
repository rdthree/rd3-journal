//import p5 from "p5";
const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(200);
    };
    p.draw = () => {
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};
new p5(sketch);
