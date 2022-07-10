import { Request, Response } from "express";
import { FindByIdUserUserCase } from "./FindByIdUserUserCase";

export class FindByIdUserController {
  constructor(private findByIdUserUserCase: FindByIdUserUserCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await this.findByIdUserUserCase.execute(id);

    return res.json(user);
  }
}
