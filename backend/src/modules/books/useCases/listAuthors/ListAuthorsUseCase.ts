import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorsRepository } from "@modules/books/repositories/IAuthorsRepository";

export class ListAuthorsUseCase {
  constructor(private authorsRepository: IAuthorsRepository) {}

  async execute(): Promise<Author[]> {
    const authors = await this.authorsRepository.list();

    return authors;
  }
}
