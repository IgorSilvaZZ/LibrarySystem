import { Request, Response } from "express";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

export class CreateAuthorController {
  constructor(private createAuthorUseCase: CreateAuthorUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const author = await this.createAuthorUseCase.execute(name);

    return res.status(201).json(author);
  }
}
