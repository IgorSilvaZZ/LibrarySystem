import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { SearchBooksController } from "./SearchBooksController";
import { SearchBooksUseCase } from "./SearchBooksUseCase";

export default (): SearchBooksController => {
  const booksRepository = new BooksRepository();

  const searchBookUseCase = new SearchBooksUseCase(booksRepository);

  const searchBookController = new SearchBooksController(searchBookUseCase);

  return searchBookController;
};
