import { AuthorsRepository } from "@modules/books/infra/typeorm/repositories/AuthorsRepository";
import { CreateAuthorController } from "./CreateAuthorController";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

export default (): CreateAuthorController => {
  const authorsRepository = new AuthorsRepository();

  const createAuthorUseCase = new CreateAuthorUseCase(authorsRepository);

  const createAuthorController = new CreateAuthorController(
    createAuthorUseCase
  );

  return createAuthorController;
};
