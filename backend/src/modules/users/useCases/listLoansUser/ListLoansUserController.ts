import { Request, Response } from "express";
import { ListLoansUserUseCase } from "./listLoansUserUseCase";

export class ListLoansUserController {
  constructor(private listLoansUserUseCase: ListLoansUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id: user_id } = req.user;

    const listLoansUserUseCase = await this.listLoansUserUseCase.execute(
      user_id
    );

    return res.json(listLoansUserUseCase);
  }
}
