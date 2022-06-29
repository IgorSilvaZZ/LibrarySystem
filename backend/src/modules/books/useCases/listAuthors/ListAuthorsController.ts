import { Request, Response } from "express";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

export class ListAuthorsController {
  constructor(private listAuthorsUseCase: ListAuthorsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const authors = await this.listAuthorsUseCase.execute();

    return res.json(authors);
  }
}
