import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { CreateBookController } from "./CreateBookController";
import { CreateBookUseCase } from "./CreateBookUseCase";

export default (): CreateBookController => {
  const booksRepository = new BooksRepository();

  const createBookUseCase = new CreateBookUseCase(booksRepository);

  const createBookController = new CreateBookController(createBookUseCase);

  return createBookController;
};
