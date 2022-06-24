import { Request, Response } from "express";
import { ListBooksUseCase } from "./ListBooksUseCase";

export class ListBooksController {
  constructor(private listBooksUseCase: ListBooksUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const books = await this.listBooksUseCase.execute();

    return res.json(books);
  }
}
