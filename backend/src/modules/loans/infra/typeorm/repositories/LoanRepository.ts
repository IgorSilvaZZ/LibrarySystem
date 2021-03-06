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

  async findByBookId(book_id: string): Promise<Loan> {
    const loan = await this.repository.findOne({ book_id });

    return loan;
  }

  async findById(id: string): Promise<Loan> {
    const loan = await this.repository.findOne({ id });

    return loan;
  }

  async list(): Promise<Loan[]> {
    const loans = await this.repository.find({
      relations: ["user"],
    });

    return loans;
  }
}
