export default (data: string): string => {
  switch (data) {
    case 'Bulbassaur': {
      return 'Plant 🍃';
    }
    case 'Charmander': {
      return 'Fire 🔥';
    }
    case 'Squirtle': {
      return 'Water 💧';
    }
    case 'Pikachu': {
      return 'Thunder ⚡';
    }
    default: {
      return 'Untyped ❌';
    }
  }
}