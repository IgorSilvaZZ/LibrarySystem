import { ICreateLibraryDTO } from "@modules/libraries/dtos/ICreateLibraryDTO";
import { ILibrariesRepository } from "@modules/libraries/repositories/ILibrariesRepository";
import { getRepository, Repository } from "typeorm";
import { Library } from "../entities/Library";

export class LibrariesRepository implements ILibrariesRepository {
  private repository: Repository<Library>;

  constructor() {
    this.repository = getRepository(Library);
  }

  async create(data: ICreateLibraryDTO): Promise<Library> {
    const library = this.repository.create(data);

    await this.repository.save(library);

    return library;
  }

  async findByLibraryName(name: string): Promise<Library> {
    const library = await this.repository.findOne({ name });

    return library;
  }

  async findAll(): Promise<Library[]> {
    const libraries = await this.repository.find();

    return libraries;
  }
}
