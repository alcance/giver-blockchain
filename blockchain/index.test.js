const Blockchain = require('./index');
const Block = require('./block');

describe('blockchain', () => {
  let bc;
  let bc2;
  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it('Genesis block created', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('Adds a new block to blockchain', () => {
    const data = "epiphany";
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length -1].data).toEqual(data);
  });

  it('validates a valid chain', () => {
    bc2.addBlock('foo');
    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });

  it('avoids validating a chain containing a corrupted genesis block', () => {
    bc2.chain[0].data = 'ugotpwnd';
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it('invalidates a corrupted chain', () => {
    bc2.addBlock('foo');
    bc2.chain[1].data = 'w00th4x';
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it('replaces current chain with a new valid chain', () => {
    bc2.addBlock('goo');
    bc.replaceChain(bc2.chain);
    expect(bc.chain).toEqual(bc2.chain);
  });

  it('avoids replacing chain if lenght is not greater than current chain', () => {
    bc.addBlock('foo');
    bc.replaceChain(bc2.chain);
    expect(bc.chain).not.toEqual(bc2.chain);
  });
});
