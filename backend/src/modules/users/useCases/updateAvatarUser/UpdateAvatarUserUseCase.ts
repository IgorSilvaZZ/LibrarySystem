import { IRequestUpdateAvatarDTO } from "@modules/users/dtos/IRequestUpdateAvatarDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { deleteFile } from "utils/file";

export class UpdateAvatarUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id, avatar_file }: IRequestUpdateAvatarDTO) {
    const user = await this.usersRepository.findById(id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}
