import { ICreateLoanDTO } from "@modules/loans/dtos/ICreateLoanDTO";
import { ILoansRepository } from "@modules/loans/repositories/ILoansRepository";
import { getRepository, Repository } from "typeorm";
import { Loan } from "../entities/Loan";

export class LoanRepository implements ILoansRepository {
  private repository: Repository<Loan>;

  constructor() {
    this.repository = getRepository(Loan);
  }

  async create(data: ICreateLoanDTO): Promise<Loan> {
    const loan = this.repository.create(data);

    await this.repository.save(loan);

    return loan;
  }

  async findByLoansUser(user_id: string): Promise<Loan[]> {
    const loansUser = await this.repository.find({
      where: { user_id },
      relations: ["book"],
    });

    return loansUser;
  }
}
