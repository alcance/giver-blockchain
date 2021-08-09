const Block = require("./block");

const block = new Block('08-08-21', "0".repeat(64), "0".repeat(64), "Eureka!");

console.log(block.toString());
