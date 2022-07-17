import { Request, Response } from "express";
import { SearchBooksUseCase } from "./SearchBooksUseCase";

export class SearchBooksController {
  constructor(private searchBookUseCase: SearchBooksUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { filter } = req.query;

    console.log(filter);

    const books = await this.searchBookUseCase.execute(String(filter));

    if (!books) {
      return res.status(204).send();
    }

    return res.json(books);
  }
}
