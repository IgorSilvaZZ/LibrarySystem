export interface ICreateUserDTO {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  rg?: string;
  identification?: string;
  password?: string;
  isAdmin?: boolean;
  isAvailable?: boolean;
  avatar?: string;
}
