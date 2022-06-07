export interface IResponseAuthenticateDTO {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
