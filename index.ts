
interface Shape {
    getArea(): number;
}


class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle: Shape = new Circle(5);
console.log(`Area of Circle: ${circle.getArea()}`);

const rectangle: Shape = new Rectangle(4, 6);
console.log(`Area of Rectangle: ${rectangle.getArea()}`);
