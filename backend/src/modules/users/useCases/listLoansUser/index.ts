import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { ListLoansUserController } from "./ListLoansUserController";
import { ListLoansUserUseCase } from "./listLoansUserUseCase";

export default (): ListLoansUserController => {
  const usersRepository = new UsersRepository();

  const listLoansUserUseCase = new ListLoansUserUseCase(usersRepository);

  const listLoansUserController = new ListLoansUserController(
    listLoansUserUseCase
  );

  return listLoansUserController;
};
