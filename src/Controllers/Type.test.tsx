import { expect } from 'chai';
import { IPokemons, Pokemons } from '../Utils/Pokemon';
import Type from './Type';

describe('Type Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist Type', (): void => {
      expect(Type).to.exist;
    });
  });
  describe('Function', (): void => {
    it('Should return an array with length of 4 when Pokemons is passed', (): void => {
      expect(Pokemons.map((p: IPokemons): void => {
        Type(p.name)
      })).to.have.lengthOf(4);
    });
    it('Should return a message when nothing is passed', (): void => {
      expect(Type('Meow')).to.equal('Untyped ❌');
    });
  });
}); 