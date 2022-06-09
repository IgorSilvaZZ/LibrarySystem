import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { IRequestAuthenticateDTO } from "@modules/users/dtos/IRequestAuthenticateDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IResponseAuthenticateDTO } from "@modules/users/dtos/IResponseAuthenticateDTO";

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: IRequestAuthenticateDTO): Promise<IResponseAuthenticateDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email/Senha incorretos!");
    }

    if (!(await compare(password, user.password))) {
      throw new Error("Email/Senha incorretos!");
    }

    const token = sign({}, "0e8a93adb74c0c7b034082c474391874", {
      subject: user.id,
      expiresIn: "1d",
    });

    const returnAuth: IResponseAuthenticateDTO = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return returnAuth;
  }
}
