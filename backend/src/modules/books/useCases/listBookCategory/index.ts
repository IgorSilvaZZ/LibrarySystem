import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { ListBookCategoryController } from "./ListBookCategoryController";
import { ListBookCategoryUseCase } from "./ListBookCategoryUseCase";

export default (): ListBookCategoryController => {
  const booksRepository = new BooksRepository();

  const listBooksCategoryUseCase = new ListBookCategoryUseCase(booksRepository);

  const listBooksCategoryController = new ListBookCategoryController(
    listBooksCategoryUseCase
  );

  return listBooksCategoryController;
};
