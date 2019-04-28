import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';
import CurrentCommand from '.';

describe('CurrentCommand', () => {
  const handleEnterStub = stub();
  const wrapper = mount(<CurrentCommand handleEnter={handleEnterStub} />);

  beforeEach(() => {
    wrapper.find('input').simulate('change', { target: { value: '' } });
  });
  afterEach(() => {
    handleEnterStub.reset();
  });

  describe('when it has focus', () => {
    describe('when the user types something', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('change', { target: { value: 'text!' } });
        wrapper.find('input').simulate('keypress', { key: 't' });
        wrapper.find('input').simulate('keypress', { key: 'e' });
        wrapper.find('input').simulate('keypress', { key: 'x' });
        wrapper.find('input').simulate('keypress', { key: 't' });
        wrapper.find('input').simulate('keypress', { key: '!' });
      });
      it('updates the text displayed to match user input', () => {
        expect(wrapper.find('input').props().value).to.deep.equal('text!');
      });
    });
    describe('when the user types something and presses enter', () => {
      const textEntered = 'text!';

      beforeEach(() => {
        wrapper.find('input').simulate('change', { target: { value: textEntered } });
        wrapper.find('input').simulate('keypress', { key: 't' });
        wrapper.find('input').simulate('keypress', { key: 'e' });
        wrapper.find('input').simulate('keypress', { key: 'x' });
        wrapper.find('input').simulate('keypress', { key: 't' });
        wrapper.find('input').simulate('keypress', { key: '!' });
        wrapper.find('input').simulate('keypress', { key: 'Enter' });
      });

      it('submits the command currently entered via the handleEnter prop', () => {
        expect(handleEnterStub.calledOnce).to.be.true;
        expect(handleEnterStub.calledWith(textEntered)).to.be.true;
      });
      it('clears the input text', () => {
        expect(wrapper.find('input').props().value).to.deep.equal('');
      });
    });
    describe('when the user presses enter without typing anything first', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('keypress', { key: 'Enter' });
      });
      it('does not call the handleEnter prop', () => {
        expect(handleEnterStub.called).to.be.false;
      });
    });
  });
  describe('when it does not have focus', () => {
    const otherComponent = mount(<div />);
    const commandEntered = 'type this into the input';

    beforeEach(() => {
      wrapper.find('input').simulate('change', { target: { value: commandEntered } });
    });
    describe('when the user types something', () => {
      beforeEach(() => {
        otherComponent.simulate('focus');
        otherComponent.simulate('change', { target: { value: 'a' } });
      });
      it('does not update the text displayed', () => {
        expect(wrapper.find('input').props().value).to.deep.equal(commandEntered);
      });
    });
    describe('when the user presses enter', () => {
      beforeEach(() => {
        otherComponent.simulate('focus');
        otherComponent.simulate('keypress', { key: 'Enter' });
      });

      it('does not call the handleEnter prop', () => {
        expect(handleEnterStub.called).to.be.false;
      });
      it('does not clear the input text', () => {
        expect(wrapper.find('input').props().value).to.equal(commandEntered);
      });
    });
  });
});
