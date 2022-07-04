import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { LoanRepository } from "@modules/loans/infra/typeorm/repositories/LoanRepository";
import { DayJsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { CreateLoanController } from "./CreateLoanController";
import { CreateLoanUseCase } from "./CreateLoanUseCase";

export default (): CreateLoanController => {
  const dateJsProvider = new DayJsDateProvider();
  const booksRepository = new BooksRepository();
  const loansRepository = new LoanRepository();

  const createLoanUseCase = new CreateLoanUseCase(
    booksRepository,
    loansRepository,
    dateJsProvider
  );

  const createLoanController = new CreateLoanController(createLoanUseCase);

  return createLoanController;
};
