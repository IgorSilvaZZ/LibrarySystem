import { Request, Response } from "express";
import { CreateLoanUseCase } from "./CreateLoanUseCase";

export class CreateLoanController {
  constructor(private createLoanUseCase: CreateLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { book_id, expected_return_date } = req.body;

    const { id: user_id } = req.user;

    const loan = await this.createLoanUseCase.execute({
      book_id,
      user_id,
      expected_return_date,
    });

    return res.status(201).json(loan);
  }
}
