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
    const book = await this.repository.findOne({
      where: { id },
      relations: ["author", "category"],
    });

    return book;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async findByIds(ids: string[]): Promise<Book[]> {
    const books = await this.repository.findByIds(ids);

    return books;
  }

  async findByFilter(filter: string): Promise<Book[]> {
    const books = await this.repository
      .createQueryBuilder("books")
      .leftJoinAndSelect("books.author", "author")
      .leftJoinAndSelect("books.category", "category")
      .where(
        "title like :filter or author.name like :filter or category.name like :filter",
        {
          filter: `%${filter}%`,
        }
      )
      .getMany();

    return books;
  }

  async findByBookCategory(name: string): Promise<Book[]> {
    const books = await this.repository.find({
      relations: ["category", "author"],
      where: {
        category: {
          name,
        },
      },
    });

    return books;
  }
}
