const Blockchain = require('./blockchain');
const Block = require('./block');

describe('blockchain', () => {
  let bc;
  beforeEach(() => {
    bc = new Blockchain();
  });

  it('Genesis block created', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('Adds a new block to blockchain', () => {
    const data = "epiphany";
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length -1].data).toEqual(data);
  });
});