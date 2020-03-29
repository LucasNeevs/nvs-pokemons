export interface IForm {
  ids: number[];
  names: string[];
  ages: string[];
  genders: string[];
  areas: string[];
  pokemons: string[];
}

export const dataPokes: IForm = {
  ids: [0],
  names: [''],
  ages: [new Date().toISOString()],
  genders: [''],
  areas: [''],
  pokemons: [''],
}