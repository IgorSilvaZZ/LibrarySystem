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
      bookAlreadyExists.quantity += 1;

      await this.booksRepository.create(bookAlreadyExists);

      return bookAlreadyExists;
    }

    const newBook = {
      ...data,
      quantity: 1,
    };

    const book = await this.booksRepository.create(newBook);

    return book;
  }
}
