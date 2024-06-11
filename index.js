const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Text} = require('./lib/shapes');
 
//questions that will be asked once program is started 
const questions = [
    {
      type: 'input',
      message: 'What letters will be in the logo (3 letters maximum)',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What Color will that text be',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape will the logo be',
      name: 'shape',
      choices: [
        "Circle",
        "Square",
        "Triangle",
        "Rectangle",
        "Oval",
        ],
    },
    {
      type: 'input',
      message: 'What Color will the shape of the logo be',
      name: 'shapeColor',
    },
];

//this function will start when the program starts, it will take the answers from inquierer and make an svg accordingly 
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      //console.log(response);
        var text = new Text(response.text, response.textColor);
        //console.log(text);
        switch (response.shape) {
          case "Triangle":
            var shape = new Shape(response.shape, response.shapeColor);
            //console.log(shape);
            break;

          case "Square":
            var shape = new Shape(response.shape, response.shapeColor);
            //console.log(shape);
            break;
          
          case "Circle":
            var shape = new Shape(response.shape, response.shapeColor);
            //console.log(shape);
            break;
          case "Oval":
            var shape = new Shape(response.shape, response.shapeColor);
            //console.log(shape);
            break;
          case "Rectangle":
            var shape = new Shape(response.shape, response.shapeColor);
            //console.log(shape);
            break;
          
        };

        
        var textString = text.draw();
        var shapeString = shape.draw();
        //console.log(`<svg width="300" height="200">${shapeString}${textString}</svg>`);

        var svg = `<svg width="300" height="200">${shapeString}${textString}</svg>`;

        fs.writeFile("logo.svg", svg, (error) => {
          if (error) throw error;
          console.log("SVG Created!!");
        });

        }
    );
};

init();