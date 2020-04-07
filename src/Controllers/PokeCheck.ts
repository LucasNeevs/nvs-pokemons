interface IMyPokemons {
  pokemon: string;
  image: string;
}

const myPokemons: IMyPokemons[] = [
  {
    pokemon: 'Bulbassaur',
    image: 'https://image.flaticon.com/icons/svg/188/188989.svg',
  },
  {
    pokemon: 'Charmander',
    image: 'https://image.flaticon.com/icons/svg/188/188987.svg',
  },
];

export default (data?: string): any => {
  // if (data === 'Bulbassaur') return 'https://image.flaticon.com/icons/svg/188/188989.svg';
  // else if (data === 'Charmander') return 'https://image.flaticon.com/icons/svg/188/188990.svg';
  
  switch(data) {
    case 'Bulbassaur': {
      return 'https://image.flaticon.com/icons/svg/188/188989.svg';
    }
    case 'Charmander': {
      return 'https://image.flaticon.com/icons/svg/188/188990.svg';
    }
    case 'Squirtle': {
      return 'https://image.flaticon.com/icons/svg/188/188988.svg';
    }
    case 'Pikachu': {
      return 'https://image.flaticon.com/icons/svg/188/188987.svg';
    }
    default: {
      return 'https://image.flaticon.com/icons/svg/188/188918.svg';
    }
  }

  // alert(data);
  // myPokemons.map(poke => {
  //   if (poke.pokemon === 'Bulbassaur') return 'https://image.flaticon.com/icons/svg/188/188989.svg'
  // });
}