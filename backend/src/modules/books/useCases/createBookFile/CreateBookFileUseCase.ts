import { Readable } from "stream";
import readline from "readline";

import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { IAuthorsRepository } from "@modules/books/repositories/IAuthorsRepository";
import { Book } from "@modules/books/infra/typeorm/entities/Book";

interface IBook {
  title: string;
  description: string;
  numberPages: number;
  language: string;
  code: string;
  category_id: string;
  author_id: string;
}

export class CreateBookFileUseCase {
  constructor(
    private categoriesRepository: ICategoriesRepository,
    private authorsRepository: IAuthorsRepository,
    private booksRepository: IBooksRepository
  ) {}

  async execute(file?: Buffer): Promise<IBook[]> {
    const readableFile = new Readable();
    readableFile.push(file);
    readableFile.push(null);

    const booksLine = readline.createInterface({
      input: readableFile,
    });

    const books: IBook[] = [];

    for await (let line of booksLine) {
      const [
        title,
        description,
        numberPages,
        language,
        code,
        categoryName,
        authorName,
      ] = line.split(",");

      const category = await this.categoriesRepository.findByNameCategory(
        categoryName
      );

      const author = await this.authorsRepository.findByNameAuthor(authorName);

      if (category && author) {
        books.push({
          title,
          description,
          numberPages: Number(numberPages),
          language,
          code,
          category_id: category.id,
          author_id: author.id,
        });
      }
    }

    for await (let {
      title,
      description,
      numberPages,
      language,
      code,
      author_id,
      category_id,
    } of books) {
      const booksExists = await this.booksRepository.findByCodeBook(code);

      if (!booksExists) {
        await this.booksRepository.create({
          title,
          description,
          numberPages,
          language,
          code,
          author_id,
          category_id,
        });
      }
    }

    return books;
  }
}
