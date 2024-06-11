class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;

    };
        

     draw() {

        if (this.type === 'Circle') {
            return `<circle cx="150" cy="100" r="90" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Oval') {
            return `<ellipse cx="150" cy="100" rx="140" ry="90" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Square') {
            return `<rect x="75" y="25" width="150" height="150" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Rectangle') {
            return `<rect x="20" y="50" width="260" height="100" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        } else if (this.type === 'Triangle') {
            return `<polygon points="150, 18 290, 182 10, 182" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        };
    };
};
    
class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    };

    draw() {
        return `<text x="100" y="125" font-family="Verdana" font-size="50" fill="${this.color}"> ${this.text} </text>`;
    };
        
};

module.exports = {Shape, Text};