export interface IForm {
  id: number;
  name: string;
  age: string;
  gender: string;
  area: string;
  pokemon: string;
}

export const initialValues: IForm = {
  id: 0,
  name: '',
  age: new Date().toISOString(),
  gender: '',
  area: '',
  pokemon: '',
}