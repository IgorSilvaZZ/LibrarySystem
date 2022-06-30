import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";
import { getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

export class BooksRepository implements IBooksRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = getRepository(Book);
  }

  async create(data: ICreateBookDTO): Promise<Book> {
    const book = this.repository.create(data);

    await this.repository.save(book);

    return book;
  }

  async list(): Promise<Book[]> {
    const books = await this.repository.find({
      relations: ["author", "category"],
    });

    return books;
  }

  async findByCodeBook(code: string): Promise<Book> {
    const book = await this.repository.findOne({ code });

    return book;
  }

  async findById(id: string): Promise<Book> {
    const book = await this.repository.findOne({ id });

    return book;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
