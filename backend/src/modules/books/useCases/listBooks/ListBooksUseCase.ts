import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class ListBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(): Promise<Book[]> {
    const books = await this.booksRepository.list();

    return books;
  }
}
