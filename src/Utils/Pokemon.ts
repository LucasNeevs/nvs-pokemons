export interface IPokemons {
  id?: number;
  icon: string;
  name: string;
}

export const Pokemons: IPokemons[] = [
  {
    id: 1,
    icon: 'https://image.flaticon.com/icons/svg/188/188989.svg',
    name: 'Bulbassaur',
  },
  {
    id: 2,
    icon: 'https://image.flaticon.com/icons/svg/188/188990.svg',
    name: 'Charmander',
  },
  {
    id: 3,
    icon: 'https://image.flaticon.com/icons/svg/188/188988.svg',
    name: 'Squirtle',
  },
  {
    id: 4,
    icon: 'https://image.flaticon.com/icons/svg/188/188987.svg',
    name: 'Pikachu',
  },
];