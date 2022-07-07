import { Loan } from "@modules/loans/infra/typeorm/entities/Loan";
import { ILoansRepository } from "@modules/loans/repositories/ILoansRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

export class DevolutionLoanUseCase {
  constructor(
    private dateProvider: IDateProvider,
    private loansRepository: ILoansRepository
  ) {}

  async execute(id: string): Promise<Loan> {
    const loan = await this.loansRepository.findById(id);

    const minimum_daily = 1;

    if (!loan) {
      throw new Error("Emprestimo não está disponivel!");
    }

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(loan.start_date, dateNow);

    if (daily <= 0) {
      daily = minimum_daily;
    }

    return loan;
  }
}
