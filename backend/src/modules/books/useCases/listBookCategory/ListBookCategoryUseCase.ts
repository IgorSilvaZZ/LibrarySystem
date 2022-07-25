import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class ListBookCategoryUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(name: string) {
    const books = await this.booksRepository.findByBookCategory(name);

    return books;
  }
}
