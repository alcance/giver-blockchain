const Block = require('./block');

describe('block', () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = 'Bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it ('Set data in block to match input', () => {
    expect(block.data).toEqual(data);
  });

  it ('lastHash in Block matches last block hash', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });

});