// const block = new Block('08-08-21', "0".repeat(64), "0".repeat(64), "Eureka!");

// console.log(block.toString());

// console.log(Block.genesis().toString());


// for (let i = 0; i <= 10; i++) {
//   block = new Block(Date.now(), "0".repeat(64), "0".repeat(64), `Data${i}`)
//   console.log(block.toString());  
// }

// const fooBlock = Block.mineBlock(Block.genesis(), 'Foobar');
// console.log(Block.genesis().toString());
// console.log(fooBlock.toString());

var Block = require("./block");

const genesis = Block.genesis();
const fooBlock = Block.mineBlock(genesis, []);

console.log(genesis.toString());
console.log(fooBlock.toString());
