import { IBooksRepository } from "@modules/books/repositories/IBooksRepository";

export class DeleteBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists) {
      throw new Error("Livro não encontrado!");
    }

    await this.booksRepository.delete(id);
  }
}
