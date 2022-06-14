import { ICreateLibraryDTO } from "@modules/libraries/dtos/ICreateLibraryDTO";
import { Library } from "@modules/libraries/infra/typeorm/entities/Library";
import { ILibrariesRepository } from "@modules/libraries/repositories/ILibrariesRepository";

export class CreateLibraryUseCase {
  constructor(private librariesRepository: ILibrariesRepository) {}

  async execute(data: ICreateLibraryDTO): Promise<Library> {
    const libraryExists = await this.librariesRepository.findByLibraryName(
      data.name
    );

    if (libraryExists) {
      throw new Error("Biblioteca já existente!");
    }

    const library = await this.librariesRepository.create(data);

    return library;
  }
}
