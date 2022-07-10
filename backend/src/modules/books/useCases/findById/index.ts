import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { FindByIdBookController } from "./FindByIdBookController";
import { FindByIdBookUseCase } from "./FindByIdBookUseCase";

export default (): FindByIdBookController => {
  const booksRepository = new BooksRepository();

  const findByIdBookUseCase = new FindByIdBookUseCase(booksRepository);

  const findByIdBookController = new FindByIdBookController(
    findByIdBookUseCase
  );

  return findByIdBookController;
};
