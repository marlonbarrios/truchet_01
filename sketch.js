const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()


let nb= 15;
let dimX= 0;
let dimY= 0;

let margin = 20;

let x , y;



const settings = {
  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: false,
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};



canvasSketch(() => {

  dimX = (width-2 * margin )/ nb;
  dimY = (height-2 * margin )/ nb;
  //background('#002fa7');
  noLoop();

  return ({ playhead, width, height }) => {
    clear();

    noStroke();
   
    fill(0)
  
    for (let j = 0; j < nb; j = j + 1) {
    for (let i = 0; i <  nb; i = i + 1)
    {
  
  x = margin + i * dimX;
  y = margin + j * dimY;
  // rect (x, y, dim, dim);
  
  let rnd = int(random(0,4));
  
  if (rnd == 0) {
  
  
  triangle( x + dimX, y,  x + dimX, y + dimY, x, y + dimY);
  
  }
  else if (rnd == 1) {
  
  
  triangle( x, y,  x + dimX, y,  x, y + dimY);
  }
  else if (rnd == 2) {
  
  
  triangle( x, y, x +  dimX, y + dimY,  x, y + dimY);
  
  }
  else {
  
  triangle( x,  y ,  x + dimX, y, x  + dimX,   y + dimY);
  
   
    }
  }
  
    }
  }
},  settings);
