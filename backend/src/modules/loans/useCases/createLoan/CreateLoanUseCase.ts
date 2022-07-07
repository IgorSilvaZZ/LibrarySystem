import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";
import { ICreateLoanDTO } from "@modules/loans/dtos/ICreateLoanDTO";
import { Loan } from "@modules/loans/infra/typeorm/entities/Loan";
import { ILoansRepository } from "@modules/loans/repositories/ILoansRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

export class CreateLoanUseCase {
  constructor(
    private booksRepository: IBooksRepository,
    private loansRepository: ILoansRepository,
    private dateProvider: IDateProvider
  ) {}

  async execute({
    book_id,
    user_id,
    expected_return_date,
  }: ICreateLoanDTO): Promise<Loan> {
    const minimumHour = 24;

    const book = await this.booksRepository.findById(book_id);

    if (!book) {
      throw new Error("Livro não encontrado!");
    }

    if (book.quantity <= 0) {
      throw new Error("Não há quantidades disponiveis para esse livro!");
    }

    const loanAlreadyExists = await this.loansRepository.findByBookId(book_id);

    if (loanAlreadyExists) {
      throw new Error("Emprestimos já feito pelo usuario!");
    }

    const loansOpenUser = await this.loansRepository.findByLoansUser(user_id);

    if (loansOpenUser.length === 4) {
      throw new Error("Usuario não pode fazer mais emprestimos!!");
    }

    const dateNow = this.dateProvider.dateNow();

    const compare = this.dateProvider.compareInHours(
      dateNow,
      expected_return_date
    );

    if (compare < minimumHour) {
      throw new Error("Tempo de retorno invalido!");
    }

    const loan = await this.loansRepository.create({
      book_id,
      expected_return_date,
      user_id,
      start_date: dateNow,
    });

    book.quantity -= 1;

    await this.booksRepository.create(book);

    return loan;
  }
}
