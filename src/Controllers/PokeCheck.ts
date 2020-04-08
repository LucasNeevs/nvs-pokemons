export default (data?: string): any => {
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
}