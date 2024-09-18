//const mySketch3 = (p) => {
    window.mySketch3 = function(p) {
    let angle = 0;
    let canvas;
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.windowResized = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
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
        canvas?.elt.focus();
        return false;
      }
    };
  };
  
  window['mySketch3'] = mySketch3;