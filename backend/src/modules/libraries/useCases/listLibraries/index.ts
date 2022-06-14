import { LibrariesRepository } from "@modules/libraries/infra/typeorm/repositories/LibrariesRepository";
import { ListLibrariesController } from "./ListLibrariesController";
import { ListLibrariesUseCase } from "./ListLibrariesUseCase";

export default (): ListLibrariesController => {
  const librariesRepository = new LibrariesRepository();

  const listLibrariesUseCase = new ListLibrariesUseCase(librariesRepository);

  const listLibrariesController = new ListLibrariesController(
    listLibrariesUseCase
  );

  return listLibrariesController;
};
