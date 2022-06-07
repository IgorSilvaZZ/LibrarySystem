export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  password: string;
  isAdmin: boolean;
}
