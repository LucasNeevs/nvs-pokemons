import { expect } from 'chai';
import { IPokemons, Pokemons } from '../../Utils/Pokemon';
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
  describe('Results', (): void => {
    const pokes = Pokemons.map((p: IPokemons) => p.name);
    it('Should return a correct image when Bulbassaur is passed', (): void => {
      expect(PokeCheck(pokes[0])).to.be.equal('https://image.flaticon.com/icons/svg/188/188989.svg');
    });
    it('Should return a correct image when Charmander is passed', (): void => {
      expect(PokeCheck(pokes[1])).to.be.equal('https://image.flaticon.com/icons/svg/188/188990.svg');
    });
    it('Should return a correct image when Squirtle is passed', (): void => {
      expect(PokeCheck(pokes[2])).to.be.equal('https://image.flaticon.com/icons/svg/188/188988.svg');
    });
    it('Should return a correct image when Pikachu is passed', (): void => {
      expect(PokeCheck(pokes[3])).to.be.equal('https://image.flaticon.com/icons/svg/188/188987.svg');
    });
    it('Shuld return a default image when an irecognized pokemon is passed', (): void => {
      expect(PokeCheck('Meow')).to.be.equal('https://image.flaticon.com/icons/svg/188/188918.svg');
    });
  });
});