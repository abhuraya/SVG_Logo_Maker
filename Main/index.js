const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { generateSVG } = require('./lib/svg');

class Generator{
  constructor(){
  }

  run(){
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Name the file! Three character limit',
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter the text color',
      },
      {
        type: 'list',
        name: 'shapes',
        message: 'Select a shape',
        choices: ['Circle', 'Square', 'Rectangle', 'Triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape',
      },
    ])
    .then(({ text, color, shapes, shapeColor }) => {
      writeFile(join(__dirname, 'output', 'logo.svg'), generateSVG(text, color, shapes, shapeColor));
      console.log('SVG generated');
    })
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    });
  }
}

const gen = new Generator;

gen.run();