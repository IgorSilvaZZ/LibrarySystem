import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      cpf,
      rg,
      password,
      identification,
      isAdmin,
      library_id,
    } = req.body;

    const user = await this.createUserUseCase.execute({
      name,
      email,
      cpf,
      rg,
      password,
      identification,
      isAdmin,
      library_id,
    });

    return res.status(201).json(user);
  }
}
