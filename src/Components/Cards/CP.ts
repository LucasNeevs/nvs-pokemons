export default (data: string): string => {
  switch(data) {
    case 'Bulbassaur': {
      return '1500';
    }
    case 'Charmander': {
      return '1700';
    }
    case 'Squirtle': {
      return '1300';
    }
    case 'Pikachu': {
      return '2000';
    }
    default: {
      return 'Not able to fight!';
    }
  }
}