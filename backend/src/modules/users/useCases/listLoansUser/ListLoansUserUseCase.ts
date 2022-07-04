import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

export class ListLoansUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user_id: string): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Usuario nao encontrado!");
    }

    return user;
  }
}
