import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      author,
      description,
      numberPages,
      language,
      code,
      category_id,
      author_id,
    } = req.body;

    const book = await this.createBookUseCase.execute({
      title,
      description,
      numberPages,
      language,
      code,
      category_id,
      author_id,
    });

    return res.status(201).json(book);
  }
}
