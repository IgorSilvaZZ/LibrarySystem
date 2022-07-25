import { ICreateBookDTO } from "../dtos/ICreateBookDTO";
import { Book } from "../infra/typeorm/entities/Book";

export interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>;
  list(): Promise<Book[]>;
  findByCodeBook(title: string): Promise<Book>;
  findById(id: string): Promise<Book>;
  delete(id: string): Promise<void>;
  findByIds(ids: string[]): Promise<Book[]>;
  findByFilter(filter: string): Promise<Book[]>;
  findByBookCategory(name: string): Promise<Book[]>;
}
