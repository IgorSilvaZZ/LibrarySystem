import { Author } from "../infra/typeorm/entities/Author";

export interface IAuthorsRepository {
  create(name: string): Promise<Author>;
  findByNameAuthor(name: string): Promise<Author>;
}
