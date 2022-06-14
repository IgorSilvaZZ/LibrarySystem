import { Library } from "@modules/libraries/infra/typeorm/entities/Library";
import { ILibrariesRepository } from "@modules/libraries/repositories/ILibrariesRepository";

export class ListLibrariesUseCase {
  constructor(private librariesRepository: ILibrariesRepository) {}

  async execute(): Promise<Library[]> {
    const libraries = await this.librariesRepository.findAll();

    return libraries;
  }
}
