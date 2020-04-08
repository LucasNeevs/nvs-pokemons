import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { IPokemons, Pokemons } from '../Utils/Pokemon';
import PokeCheck from './PokeCheck';

describe('PokeCheck', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist PokeCheck', (): void => {
      expect(PokeCheck).to.exist;
    });
    it('Should return an array with length of 4 when Pokemons is passed', (): void => {
      expect(Pokemons.map((p: IPokemons): void => {
        PokeCheck(p.name)
      })).to.have.lengthOf(4);
    });
    it('Should return a default image when nothing is passed', (): void => {
      expect(PokeCheck('Meow')).to.be.equal('https://image.flaticon.com/icons/svg/188/188918.svg')
    });
  });
});