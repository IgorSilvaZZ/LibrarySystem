import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

export interface IUsersRepositoru {
  create(data: ICreateUserDTO): Promise<User>;
}
