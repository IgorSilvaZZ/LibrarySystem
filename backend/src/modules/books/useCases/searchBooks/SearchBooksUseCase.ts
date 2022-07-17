import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class SearchBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(filter: string): Promise<Book[]> {
    const books = await this.booksRepository.findByFilter(filter);

    return books;
  }
}
