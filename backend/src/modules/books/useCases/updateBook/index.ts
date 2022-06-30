import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { UpdateBookController } from "./UpdateBookController";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

export default (): UpdateBookController => {
  const booksRepository = new BooksRepository();

  const updateBookUseCase = new UpdateBookUseCase(booksRepository);

  const updateBookController = new UpdateBookController(updateBookUseCase);

  return updateBookController;
};
