import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, data: ICreateBookDTO): Promise<Book> {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists) {
      throw new Error("Livro nao encontrado!");
    }

    const updateBook = {
      id,
      ...data,
    };

    const book = await this.booksRepository.create(updateBook);

    return book;
  }
}
