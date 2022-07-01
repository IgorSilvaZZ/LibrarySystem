import { Loan } from "../infra/typeorm/entities/Loan";

export interface ILoansRepository {
  create(): Promise<Loan>;
}
