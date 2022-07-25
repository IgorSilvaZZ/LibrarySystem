import { Request, Response } from "express";

import { CreateBookFileUseCase } from "./CreateBookFileUseCase";

export class CreateBookFileController {
  constructor(private createBookFileUseCase: CreateBookFileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const books = await this.createBookFileUseCase.execute(file.buffer);

    return res.json(books);
  }
}
