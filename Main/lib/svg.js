const shapesjs = require('./shapes');
//function which will require an input of a shape and output the svg line of code pertinent to the shape

function shapeCode(shapes){
  if(shapes == 'Circle'){
    return 'cx="150" cy="100" r="80"';
  }else if (shapes == 'Triangle'){
    return 'polygon points="150, 18 244, 182 56, 182"'
  }else if (shapes == 'Square'){
    return 'rect x="50" y="50" width="200" height="200"';
  }else if (shapes == 'Rectangle'){
    return 'rect x="10" y="10" width="300" height="200"';
  }
}

function generateSVG(text, color, shapes, shapeColor) {

  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
  
  
  <${shapeCode(shapes)} fill="${shapeColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
  
  </svg>`//shapecolor can be a child of shapes
  }

module.exports = { generateSVG };
