export interface ICreateLibraryDTO {
  id?: string;
  name: string;
  street: string;
  city: string;
  state: string;
  cep: string;
  uf: string;
  neighborhood: string;
  number: string;
  hourOpen: string;
  hourClose: string;
}
