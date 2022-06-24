import { IAuthorsRepository } from "@modules/books/repositories/IAuthorsRepository";
import { getRepository, Repository } from "typeorm";
import { Author } from "../entities/Author";

export class AuthorsRepository implements IAuthorsRepository {
  private repository: Repository<Author>;

  constructor() {
    this.repository = getRepository(Author);
  }

  async create(name: string): Promise<Author> {
    const author = this.repository.create({ name });

    await this.repository.save(author);

    return author;
  }

  async findByNameAuthor(name: string): Promise<Author> {
    const author = await this.repository.findOne({ name });

    return author;
  }
}
