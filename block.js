class Block {
  constructor(timestap, lastHash, hash, data) {
    this.timestap = timestap;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block -
            Timestamp: ${this.timestap}
            Last Hash: ${this.lastHash}
            Hash: ${this.hash}
            Data: ${this.data}`;
  }

  static genesis() {
    return new this('Genesis 💥', "0".repeat(64), "0".repeat(64), []);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = '0'.repeat(64);
    
    return new this(timestamp, lastHash, hash, data);

  }
}

module.exports = Block;