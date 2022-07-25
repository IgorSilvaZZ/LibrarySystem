import { AuthorsRepository } from "@modules/books/infra/typeorm/repositories/AuthorsRepository";
import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { CategoriesRepository } from "@modules/categories/infra/typeorm/repositories/CategoriesRepository";
import { CreateBookFileController } from "./CreateBookFileController";
import { CreateBookFileUseCase } from "./CreateBookFileUseCase";

export default (): CreateBookFileController => {
  const categoriesRepository = new CategoriesRepository();

  const authorsRepository = new AuthorsRepository();

  const booksRepository = new BooksRepository();

  const createBookFileUseCase = new CreateBookFileUseCase(
    categoriesRepository,
    authorsRepository,
    booksRepository
  );

  const createBooksFileController = new CreateBookFileController(
    createBookFileUseCase
  );

  return createBooksFileController;
};
