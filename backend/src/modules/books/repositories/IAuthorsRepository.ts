import { Author } from "../infra/typeorm/entities/Author";

export interface IAuthorsRepository {
  create(name: string): Promise<Author>;
  list(): Promise<Author[]>;
  findByNameAuthor(name: string): Promise<Author>;
}
