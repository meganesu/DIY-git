const { expect } = require('chai');
const Commit = require('./commit');

describe('Commit', () => {
  const commit = new Commit(null);
  xit('has a unique identifier', () => {
    expect(commit).to.have.property('id');
  });
  it('has a reference to its parent commit', () => {
    expect(commit).to.have.property('parent');
  });
});
