import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Form from './Form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Form tests', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist App', (): void => {
      const wrapper = mount(<Form />);
      expect(wrapper).to.exist;
    });
  });
});