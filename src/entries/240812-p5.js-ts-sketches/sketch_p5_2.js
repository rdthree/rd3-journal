//const mySketch2 = (p) => {
window.mySketch2 = function(p) {
    let x = 100;
    let y = 100;
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.windowResized = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.draw = () => {
      p.background(50, 100, 200);
      for (let i = 0; i < 10; i++) {
        p.fill(p.random(255), p.random(255), p.random(255));
        p.rect(p.random(p.width), p.random(p.height), p.random(20, 50), p.random(20, 50));
      }
    };
  };
  
  window['mySketch2'] = mySketch2;