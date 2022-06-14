import { LibrariesRepository } from "@modules/libraries/infra/typeorm/repositories/LibrariesRepository";
import { CreateLibraryController } from "./CreateLibraryController";
import { CreateLibraryUseCase } from "./CreateLibraryUseCase";

export default (): CreateLibraryController => {
  const librariesRepository = new LibrariesRepository();

  const createLibraryUseCase = new CreateLibraryUseCase(librariesRepository);

  const createLibraryController = new CreateLibraryController(
    createLibraryUseCase
  );

  return createLibraryController;
};
