import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { ListBooksController } from "./ListBooksController";
import { ListBooksUseCase } from "./ListBooksUseCase";

export default (): ListBooksController => {
  const booksRepository = new BooksRepository();

  const listBooksUseCase = new ListBooksUseCase(booksRepository);

  const listBooksController = new ListBooksController(listBooksUseCase);

  return listBooksController;
};
