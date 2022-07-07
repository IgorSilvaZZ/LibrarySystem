import { ICreateLoanDTO } from "../dtos/ICreateLoanDTO";
import { Loan } from "../infra/typeorm/entities/Loan";

export interface ILoansRepository {
  create(data: ICreateLoanDTO): Promise<Loan>;
  findByLoansUser(user_id: string): Promise<Loan[]>;
  findByBookId(book_id: string): Promise<Loan>;
  findById(id: string): Promise<Loan>;
}
