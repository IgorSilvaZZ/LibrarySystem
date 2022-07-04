export interface ICreateLoanDTO {
  id?: string;
  user_id: string;
  book_id: string;
  start_date?: Date;
  end_date?: Date;
  expected_return_date: Date;
}
