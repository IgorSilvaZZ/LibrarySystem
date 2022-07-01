import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByEmailOrCpf(email: string, cpf: string): Promise<User>;
  findById(id: string): Promise<User>;
}
