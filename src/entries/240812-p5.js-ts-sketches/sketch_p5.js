//function mySketch(p) {
window.sketch_p5 = function(p) {
    let x = 100;
    let y = 100;
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.windowResized = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.draw = () => {
      p.background(220);
      p.fill(100, 200, 120);
      p.ellipse(x, y, 50, 50);
    };
  }
  
  window['sketch_p5'] = sketch_p5;