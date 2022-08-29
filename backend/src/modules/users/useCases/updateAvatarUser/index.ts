import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { UpdateAvatarUserController } from "./UpdateAvatarUserController";
import { UpdateAvatarUserUseCase } from "./UpdateAvatarUserUseCase";

export default (): UpdateAvatarUserController => {
  const usersRepository = new UsersRepository();

  const updateAvatarUserUseCase = new UpdateAvatarUserUseCase(usersRepository);

  const updateAvatarUserController = new UpdateAvatarUserController(
    updateAvatarUserUseCase
  );

  return updateAvatarUserController;
};
