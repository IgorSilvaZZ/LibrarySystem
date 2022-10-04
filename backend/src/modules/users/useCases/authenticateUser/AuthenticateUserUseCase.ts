import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { z } from "zod";

import { IRequestAuthenticateDTO } from "@modules/users/dtos/IRequestAuthenticateDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IResponseAuthenticateDTO } from "@modules/users/dtos/IResponseAuthenticateDTO";
import { ValidationErrors } from "@shared/errors/ValidationErrors";
import { TypeErrorValidation } from "@shared/types/TypeErrorValidation";
import { createIssuesErros } from "utils/createIssuesErros";

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: IRequestAuthenticateDTO): Promise<IResponseAuthenticateDTO> {
    const UserValidation = z.object({
      email: z.string().email({ message: "Email Invalido!" }),
      password: z
        .string()
        .min(4, { message: "Senha com menos de 4 caracteres!" }),
    });

    const { error, success } = UserValidation.safeParse({
      email,
      password,
    }) as TypeErrorValidation;

    if (!success) {
      const issuesErrors = createIssuesErros(error.issues);

      throw new ValidationErrors(issuesErrors);
    }

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email/Senha incorretos!");
    }

    if (!(await compare(password, user.password))) {
      throw new Error("Email/Senha incorretos!");
    }

    const token = sign({}, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "4h",
    });

    const returnAuth: IResponseAuthenticateDTO = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        rg: user.rg,
        identification: user.identification,
        isAdmin: user.isAdmin,
        isAvailable: user.isAvailable,
      },
      token,
    };

    return returnAuth;
  }
}
