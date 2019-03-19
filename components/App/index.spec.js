import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from '.';

describe('<App />', () => {
  const app = mount(<App />);
  it('should render a command line interface', () => {
    expect(app.exists('CommandLine')).to.be.true;
  });
  xit('should render a visual git history');
  xit('should render staging contents');
  xit('should render a working directory navigator');
});
