import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import InputRow from '.';

describe('InputRow', () => {
  const inputRowProps = {
    content: 'This is the text to render',
  };
  const wrapper = shallow(<InputRow {...inputRowProps} />);
  it('should render a Prompt', () => {
    expect(wrapper.find('Prompt')).to.have.lengthOf(1);
  });
  it('should render the text passed in as a prop', () => {
    expect(wrapper.find('.input-row').text()).to.deep.equal(inputRowProps.content);
  });
});
