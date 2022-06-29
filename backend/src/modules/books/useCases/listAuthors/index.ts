import { AuthorsRepository } from "@modules/books/infra/typeorm/repositories/AuthorsRepository";
import { ListAuthorsController } from "./ListAuthorsController";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

export default (): ListAuthorsController => {
  const authorsRespository = new AuthorsRepository();

  const listAuthorsUseCase = new ListAuthorsUseCase(authorsRespository);

  const listAuthorsController = new ListAuthorsController(listAuthorsUseCase);

  return listAuthorsController;
};
