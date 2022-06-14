import { hash } from "bcryptjs";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    cpf,
    rg,
    password,
    identification,
    isAdmin,
    library_id,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmailOrCpf(
      email,
      cpf
    );

    if (userAlreadyExists) {
      throw new Error("Usuario já cadastrado!");
    }

    const passwordHash = await hash(password, 8);

    const data = {
      name,
      email,
      cpf,
      rg,
      password: passwordHash,
      identification,
      isAdmin,
      library_id,
    };

    const user = await this.usersRepository.create(data);

    return user;
  }
}
