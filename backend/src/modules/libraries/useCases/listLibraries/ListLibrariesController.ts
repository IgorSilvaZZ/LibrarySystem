import { Request, Response } from "express";
import { ListLibrariesUseCase } from "./ListLibrariesUseCase";

export class ListLibrariesController {
  constructor(private listLibrariesUseCase: ListLibrariesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const libraries = await this.listLibrariesUseCase.execute();

    return res.json(libraries);
  }
}
