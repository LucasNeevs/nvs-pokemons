import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('App', (): void => {
  describe('Smoke tests', (): void => {
    it ('Should exist App', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper).to.exist;
    });
  });
});