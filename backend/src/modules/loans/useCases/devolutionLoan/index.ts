import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { LoanRepository } from "@modules/loans/infra/typeorm/repositories/LoanRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { DayJsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { DevolutionLoanController } from "./DevolutionLoanController";
import { DevolutionLoanUseCase } from "./DevolutionLoanUseCase";

export default (): DevolutionLoanController => {
  const dateProvider = new DayJsDateProvider();

  const usersRepository = new UsersRepository();

  const booksRepository = new BooksRepository();

  const loansRepository = new LoanRepository();

  const devolutionLoanUseCase = new DevolutionLoanUseCase(
    dateProvider,
    usersRepository,
    booksRepository,
    loansRepository
  );

  const devolutionLoanController = new DevolutionLoanController(
    devolutionLoanUseCase
  );

  return devolutionLoanController;
};
