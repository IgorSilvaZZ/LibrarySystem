import { ICreateLibraryDTO } from "../dtos/ICreateLibraryDTO";
import { Library } from "../infra/typeorm/entities/Library";

export interface ILibrariesRepository {
  create(data: ICreateLibraryDTO): Promise<Library>;
  findByLibraryName(name: string): Promise<Library>;
  findAll(): Promise<Library[]>;
}
