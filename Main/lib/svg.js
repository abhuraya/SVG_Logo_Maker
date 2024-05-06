const shapesjs = require('./shapes');
//function which will require an input of a shape and output the svg line of code pertinent to the shape

function generateSVG(text, color, shapes, shapeColor) {

return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">


<${shapes} cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

</svg>`
}
module.exports = { generateSVG };
