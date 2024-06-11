const {Shape} = require('./shapes');

describe('Shape', () => {
  test('create a circle SVG', () => {
    const circle = new Shape('Circle', 'red');
    expect(circle.draw()).toBe('<circle cx="150" cy="100" r="90" stroke="red" fill="red" stroke-width="5"/>');
  });

  test('create a oval SVG', () => {
    const oval = new Shape('Oval', 'blue');
    expect(oval.draw()).toBe('<ellipse cx="150" cy="100" rx="140" ry="90" stroke="blue" fill="blue" stroke-width="5"/>');
  });

  test('create a square SVG', () => {
    const square = new Shape('Square', 'green');
    expect(square.draw()).toBe('<rect x="75" y="25" width="150" height="150" stroke="green" fill="green" stroke-width="5"/>');
  });

  test('create a rectangle SVG', () => {
    const rectangle = new Shape('Rectangle', 'yellow');
    expect(rectangle.draw()).toBe('<rect x="20" y="50" width="260" height="100" stroke="yellow" fill="yellow" stroke-width="5"/>');
  });

  test('create a triangle SVG', () => {
    const triangle = new Shape('Triangle', 'purple');
    expect(triangle.draw()).toBe('<polygon points="150, 18 290, 182 10, 182" stroke="purple" fill="purple" stroke-width="5"/>');
  });
});
