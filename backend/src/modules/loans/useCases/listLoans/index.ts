import { LoanRepository } from "@modules/loans/infra/typeorm/repositories/LoanRepository";
import { ListLoansController } from "./ListLoansController";
import { ListLoansUseCase } from "./ListLoansUseCase";

export default (): ListLoansController => {
  const loansRepository = new LoanRepository();

  const listLoansUseCase = new ListLoansUseCase(loansRepository);

  const listLoansController = new ListLoansController(listLoansUseCase);

  return listLoansController;
};
