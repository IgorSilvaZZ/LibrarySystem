import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(data: ICreateBookDTO): Promise<Book> {
    const bookAlreadyExists = await this.booksRepository.findByCodeBook(
      data.code
    );

    if (bookAlreadyExists) {
      throw new Error("Livro já existente!");
    }

    const book = await this.booksRepository.create(data);

    return book;
  }
}
