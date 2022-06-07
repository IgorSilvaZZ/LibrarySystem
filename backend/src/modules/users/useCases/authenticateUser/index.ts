import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
  const usersRepository = new UsersRepository();

  const authenticateUserUserCase = new AuthenticateUserUseCase(usersRepository);

  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUserCase
  );

  return authenticateUserController;
};
