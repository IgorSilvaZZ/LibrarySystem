import { Request, Response } from "express";
import { ListLoansUseCase } from "./ListLoansUseCase";

export class ListLoansController {
  constructor(private listLoansUseCase: ListLoansUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const loans = await this.listLoansUseCase.execute();

    return res.json(loans);
  }
}
