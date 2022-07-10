import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class FindByIdBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string): Promise<Book> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new Error("Livro não encontrado!");
    }

    return book;
  }
}
