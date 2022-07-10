export interface IResponseAuthenticateDTO {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    rg: string;
    identification: string;
    isAdmin: boolean;
    isAvailable: boolean;
  };
  token: string;
}
