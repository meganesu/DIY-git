import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import CommandLine from '.';

describe('<CommandLine />', () => {
  const wrapper = mount(<CommandLine />);
  it('should render History component', () => {
    expect(wrapper.exists('History')).to.be.true;
  });
  it('should render CurrentCommand component', () => {
    expect(wrapper.exists('CurrentCommand')).to.be.true;
  });
});
