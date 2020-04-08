import { expect } from 'chai';
import { IPokemons, Pokemons } from '../Utils/Pokemon';
import PokeCheck from './PokeCheck';

describe('PokeCheck Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist PokeCheck', (): void => {
      expect(PokeCheck).to.exist;
    });
  });
  describe('Function', (): void => {
    it('Should return an array with length of 4 when Pokemons is passed', (): void => {
      expect(Pokemons.map((p: IPokemons): void => {
        PokeCheck(p.name)
      })).to.have.lengthOf(4);
    });
    it('Should return a default image when a irecognized is passed', (): void => {
      expect(PokeCheck('Meow')).to.be.equal('https://image.flaticon.com/icons/svg/188/188918.svg')
    });
  });
});