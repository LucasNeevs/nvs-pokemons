import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cards from './Cards';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Cards tests', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist Cards', (): void => {
      const wrapper = mount(<Cards />);
      expect(wrapper).to.exist;
    });
  });
});