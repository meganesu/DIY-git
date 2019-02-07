import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import OutputRow from '.';

describe('OutputRow', () => {
  describe('when it renders', () => {
    const outputRowProps = {
      content: 'This is the text to render',
    };
    const wrapper = shallow(<OutputRow {...outputRowProps} />);
    it('renders the text that gets passed in as a prop', () => {
      expect(wrapper.find('.output-row').text()).to.deep.equal(outputRowProps.content);
    });
  });
});
