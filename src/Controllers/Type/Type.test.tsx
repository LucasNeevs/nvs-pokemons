import { expect } from 'chai';
import { IPokemons, Pokemons } from '../../Utils/Pokemon';
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
  describe('Results', (): void => {
    const pokes = Pokemons.map((p: IPokemons) => p.name);
    it('Should return type Plant when Bulbassaur is passed', (): void => {
      expect(Type(pokes[0])).to.be.equal('Plant 🍃');
    });
    it('Should return type Fire when Charmander is passed', (): void => {
      expect(Type(pokes[1])).to.be.equal('Fire 🔥');
    });
    it('Should return type Water when Squirtle is passed', (): void => {
      expect(Type(pokes[2])).to.be.equal('Water 💧');
    });
    it('Should return type Thunder when Pikachu is passed', (): void => {
      expect(Type(pokes[3])).to.be.equal('Thunder ⚡');
    });
    it('Shuld return Untyped when a irecognized pokemon is passed', (): void => {
      expect(Type('Meow')).to.be.equal('Untyped ❌');
    });
  });
}); 