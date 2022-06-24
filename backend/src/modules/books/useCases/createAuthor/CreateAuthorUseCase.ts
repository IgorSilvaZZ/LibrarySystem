import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorsRepository } from "@modules/books/repositories/IAuthorsRepository";

export class CreateAuthorUseCase {
  constructor(private authorsRepository: IAuthorsRepository) {}

  async execute(name: string): Promise<Author> {
    const authorAlreadyExists = await this.authorsRepository.findByNameAuthor(
      name
    );

    if (authorAlreadyExists) {
      throw new Error("Author já existente!");
    }

    const author = await this.authorsRepository.create(name);

    return author;
  }
}
