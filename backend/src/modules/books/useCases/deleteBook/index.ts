import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { DeleteBookController } from "./DeleteBookController";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

export default (): DeleteBookController => {
  const booksRepository = new BooksRepository();

  const deleteBookUseCase = new DeleteBookUseCase(booksRepository);

  const deleteBookController = new DeleteBookController(deleteBookUseCase);

  return deleteBookController;
};
