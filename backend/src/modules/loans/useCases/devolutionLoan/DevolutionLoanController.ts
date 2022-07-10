import { Request, Response } from "express";
import { DevolutionLoanUseCase } from "./DevolutionLoanUseCase";

export class DevolutionLoanController {
  constructor(private devolutionLoanUseCase: DevolutionLoanUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const loan = await this.devolutionLoanUseCase.execute(id);

    return res.json(loan);
  }
}
