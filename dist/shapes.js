"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
exports.Circle = Circle;
class Square {
    constructor(length) {
        this.length = length;
    }
}
exports.Square = Square;
class Star {
    constructor(points) {
        this.points = points;
    }
}
exports.default = Star;
