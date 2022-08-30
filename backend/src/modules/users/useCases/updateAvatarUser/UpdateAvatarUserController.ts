import { Request, Response } from "express";
import { UpdateAvatarUserUseCase } from "./UpdateAvatarUserUseCase";

export class UpdateAvatarUserController {
  constructor(private updateAvatarUserUseCase: UpdateAvatarUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.user;

    const avatar_file = req.file.filename;

    await this.updateAvatarUserUseCase.execute({ id, avatar_file });

    return res.status(204).send();
  }
}
