import { Loan } from "@modules/loans/infra/typeorm/entities/Loan";
import { ILoansRepository } from "@modules/loans/repositories/ILoansRepository";

export class ListLoansUseCase {
  constructor(private loansRepository: ILoansRepository) {}

  async execute(): Promise<Loan[]> {
    const loans = await this.loansRepository.list();

    return loans;
  }
}
