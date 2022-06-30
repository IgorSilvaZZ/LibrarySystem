import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteBookUseCase.execute(id);

    return res.send();
  }
}
