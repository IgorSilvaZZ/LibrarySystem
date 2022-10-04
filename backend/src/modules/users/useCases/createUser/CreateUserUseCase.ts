import { z } from "zod";
import { hash } from "bcryptjs";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { ValidationErrors } from "@shared/errors/ValidationErrors";
import { TypeErrorValidation } from "@shared/types/TypeErrorValidation";
import { createIssuesErros } from "utils/createIssuesErros";

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
  }: ICreateUserDTO): Promise<User> {
    const UserValidation = z.object({
      name: z.string().min(4, { message: "Nome com menos de 4 caracteres" }),
      email: z.string().email({ message: "Email invalido!" }),
      rg: z.string().max(13, { message: "RG Invalido!" }),
      cpf: z.string().max(11, { message: "CPF invalido!" }),
      password: z
        .string()
        .min(4, { message: "Senha com menos de 4 caracteres!" }),
      identification: z
        .string()
        .min(5, { message: "Identificação com menos de 5 caracteres!" }),
      isAdmin: z.boolean(),
    });

    const { success, error } = UserValidation.safeParse({
      name,
      email,
      cpf,
      rg,
      password,
      identification,
      isAdmin,
    }) as TypeErrorValidation;

    if (!success) {
      const issuesErrors = createIssuesErros(error.issues);

      throw new ValidationErrors(issuesErrors);
    }

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
      isAvailable: true,
    };

    const user = await this.usersRepository.create(data);

    return user;
  }
}
