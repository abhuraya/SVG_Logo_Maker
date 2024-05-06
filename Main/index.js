const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const shapejs = require('./lib/shapes');
const { generateSVG } = require('./lib/svg');
const { textLength } = require('./lib/text');

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
    .then(({ text }) => {
      textLength(text);
      writeFile(join(__dirname, 'output', 'logo.svg'), generateSVG(text, color, shapes, shapeColor));
      console.log('SVG generated');
    })
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    });
  }

  postText(){
    return inquirer
    .prompt([
      
    ])
    .then(() =>
  console.log('check'));
  }
}

module.exports = Generator;
const gen = new Generator;

gen.run();