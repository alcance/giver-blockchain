const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  getLastBlock() {
    return this.chain[this.chain.length -1];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.getLastBlock(), data);
    this.chain.push(block);
    return block;
  }
}

module.exports = Blockchain;
