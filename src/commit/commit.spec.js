const { expect } = require('chai');
const Commit = require('./commit');

describe('Commit', () => {
  const commit = new Commit(null);
  xit('should have a unique identifier', () => {
    expect(commit).to.have.property('id');
  });
  it('should have a reference to its parent commit', () => {
    expect(commit).to.have.property('parent');
  });
});
