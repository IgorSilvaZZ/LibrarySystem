import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";
import { Loan } from "@modules/loans/infra/typeorm/entities/Loan";
import { ILoansRepository } from "@modules/loans/repositories/ILoansRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

export class DevolutionLoanUseCase {
  constructor(
    private dateProvider: IDateProvider,
    private usersRepository: IUsersRepository,
    private booksRepository: IBooksRepository,
    private loansRepository: ILoansRepository
  ) {}

  async execute(id: string): Promise<Loan> {
    const loan = await this.loansRepository.findById(id);

    const minimum_daily = 1;

    if (!loan) {
      throw new Error("Emprestimo não está disponivel!");
    }

    const dateNow = this.dateProvider.dateNow();

    // Total de dias que ficou com livro
    let daily = this.dateProvider.compareInDays(loan.start_date, dateNow);

    if (daily <= 0) {
      daily = minimum_daily;
    }

    const user = await this.usersRepository.findById(loan.user_id);

    const book = await this.booksRepository.findById(loan.book_id);

    // Verificando se houve multa
    const fine = this.dateProvider.compareInDays(
      loan.expected_return_date,
      dateNow
    );

    // Caso devolva com atraso, desativando o usuario de realizar mais emprestimos
    if (fine > 0) {
      user.isAvailable = false;

      await this.usersRepository.create(user);
    }

    loan.end_date = this.dateProvider.dateNow();

    book.quantity += 1;

    await this.booksRepository.create(book);

    await this.loansRepository.create(loan);

    return loan;
  }
}
