import { Request, Response } from "express";

import { FindByIdBookUseCase } from "./FindByIdBookUseCase";

export class FindByIdBookController {
  constructor(private findByIdBookUseCase: FindByIdBookUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const book = await this.findByIdBookUseCase.execute(id);

    return res.json(book);
  }
}
