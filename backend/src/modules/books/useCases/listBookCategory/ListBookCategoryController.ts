import { Request, Response } from "express";

import { ListBookCategoryUseCase } from "./ListBookCategoryUseCase";

export class ListBookCategoryController {
  constructor(private listBookCategoryUseCase: ListBookCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;

    const books = await this.listBookCategoryUseCase.execute(String(name));

    return res.json(books);
  }
}
