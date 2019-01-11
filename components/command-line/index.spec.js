import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import CommandLine from '.';

describe('<CommandLine />', () => {
  const app = mount(<CommandLine />);
  it('should render an element with the id "command-line"', () => {
    expect(app.exists('#command-line')).to.be.true;
  });
});
