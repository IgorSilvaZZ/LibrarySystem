import { Request, Response } from "express";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const {
      title,
      author,
      description,
      numberPages,
      language,
      quantity,
      code,
      category_id,
      author_id,
    } = req.body;

    const data = {
      title,
      author,
      description,
      numberPages,
      language,
      quantity,
      code,
      category_id,
      author_id,
    };

    const book = await this.updateBookUseCase.execute(id, data);

    return res.json(book);
  }
}
