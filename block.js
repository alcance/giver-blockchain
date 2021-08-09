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
}

module.exports = Block;