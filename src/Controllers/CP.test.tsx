import { expect } from 'chai';
import { IPokemons, Pokemons } from '../Utils/Pokemon';
import CP from './CP';

describe('CP Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist CP', (): void => {
      expect(CP).to.exist;
    });
    it('Should return an array with length of 4 when Pokemons is passed', (): void => {
      expect(Pokemons.map((p: IPokemons): void => {
        CP(p.name)
      })).to.have.lengthOf(4);
    });
    it('Should return a message when nothing is passed', (): void => {
      expect(CP('Meow')).to.be.equal('Not able to fight!');
    });
  });
});