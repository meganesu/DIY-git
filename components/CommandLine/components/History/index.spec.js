import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import History from '.';

describe('History', () => {
  describe.only('when the state is empty', () => {
    const wrapper = mount(<History />);
    it('should not render anything', () => {
      expect(wrapper.isEmptyRender()).to.be.true;
    });
  });
  describe('when the state has contents', () => {
    const historyProps = {
      history: [
        {
          input: 'first input',
          output: 'first output',
        },
        {
          input: 'next input',
          output: 'next output',
        },
      ],
    };
    const wrapper = mount(<History {...historyProps} />);
    it('should render the contents for each input/output pair', () => {
      expect(wrapper.isEmptyRender()).to.be.false;
    });
  });
});
