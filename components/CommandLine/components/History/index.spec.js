import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import History from '.';
import InputRow from '../InputRow';
import OutputRow from '../OutputRow';

describe('History', () => {
  describe('when the state is empty', () => {
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
      wrapper.find(InputRow).forEach((inputRow, index) => {
        expect(inputRow.prop('content')).to.deep.equal(historyProps.history[index].input);
      });
      wrapper.find(OutputRow).forEach((outputRow, index) => {
        expect(outputRow.prop('content')).to.deep.equal(historyProps.history[index].output);
      });
    });
  });
});
