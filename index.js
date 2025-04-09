// Circle class implementing Shape interface
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Rectangle class implementing Shape interface
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Usage
var circle = new Circle(5);
console.log("Area of Circle: ".concat(circle.getArea()));
var rectangle = new Rectangle(4, 6);
console.log("Area of Rectangle: ".concat(rectangle.getArea()));
