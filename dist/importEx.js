"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = __importDefault(require("./shapes"));
const shapes_2 = require("./shapes");
let coolStar = new shapes_1.default(6);
console.log(coolStar);
let coolCircle = new shapes_2.Circle(10);
console.log(coolCircle);
let coolSquare = new shapes_2.Square(15);
console.log(coolSquare);
