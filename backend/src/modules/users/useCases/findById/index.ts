import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { FindByIdUserController } from "./FindByIdUserController";
import { FindByIdUserUserCase } from "./FindByIdUserUserCase";

export default (): FindByIdUserController => {
  const usersRepository = new UsersRepository();

  const findByIdUserUserCase = new FindByIdUserUserCase(usersRepository);

  const findByIdUserController = new FindByIdUserController(
    findByIdUserUserCase
  );

  return findByIdUserController;
};
