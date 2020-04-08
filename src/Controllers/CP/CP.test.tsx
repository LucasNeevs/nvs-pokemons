import { expect } from 'chai';
import { IPokemons, Pokemons } from '../../Utils/Pokemon';
import CP from './CP';

describe('CP Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist CP', (): void => {
      expect(CP).to.exist;
    });
  });
  describe('Function', (): void => {
    it('Should return an array with length of 4 when Pokemons is passed', (): void => {
      expect(Pokemons.map((p: IPokemons): void => {
        CP(p.name)
      })).to.have.lengthOf(4);
    });
    it('Should return a message when nothing is passed', (): void => {
      expect(CP('Meow')).to.be.equal('Not able to fight!');
    });
  });
  describe('Results', (): void => {
    const pokes = Pokemons.map((p: IPokemons) => p.name);
    it('Should return a correct CP when Bulbassaur is passed', (): void => {
      expect(CP(pokes[0])).to.be.equal('1500');
    });
    it('Should return a correct CP when Charmander is passed', (): void => {
      expect(CP(pokes[1])).to.be.equal('1700');
    });
    it('Should return a correct CP when Squirtle is passed', (): void => {
      expect(CP(pokes[2])).to.be.equal('1300');
    });
    it('Should return a correct CP when Pikachu is passed', (): void => {
      expect(CP(pokes[3])).to.be.equal('2000');
    });
    it('Shuld return a message when a irecognized pokemon is passed', (): void => {
      expect(CP('Meow')).to.be.equal('Not able to fight!');
    });
  });
});