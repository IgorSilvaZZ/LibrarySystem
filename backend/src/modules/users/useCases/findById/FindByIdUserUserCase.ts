import { z } from "zod";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { TypeErrorValidation } from "@shared/types/TypeErrorValidation";
import { ValidationErrors } from "@shared/errors/ValidationErrors";
import { createIssuesErros } from "utils/createIssuesErros";

export class FindByIdUserUserCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const idUserValidation = z.object({
      id: z
        .string({ description: "O campo deve ser um valor de texto (UUID)" })
        .min(26, { message: "Deve conter no minimo 26 caracteres!" }),
    });

    const { success, error } = idUserValidation.safeParse({
      id,
    }) as TypeErrorValidation;

    if (!success) {
      const issuesErrors = createIssuesErros(error.issues);

      throw new ValidationErrors(issuesErrors);
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("Usuario não existe!");
    }

    return user;
  }
}
