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
  describe('when the user enters a command into CurrentCommand', () => {
    const userEnteredText = 'something the user entered into CurrentCommand';
    const currentCommandWrapper = wrapper.find('CurrentCommand');
    before(() => {
      currentCommandWrapper.prop('handleEnter')(userEnteredText);
    });
    it('should render the value entered in the History', () => {
      const historyWrapper = wrapper.find('History');
      expect(historyWrapper.prop('history')).to.have.lengthOf(1);
      expect(historyWrapper.prop('history')[0].input).to.equal(userEnteredText);
    });
  });
});
