import { Request, Response } from "express";

import { CreateLibraryUseCase } from "./CreateLibraryUseCase";

export class CreateLibraryController {
  constructor(private createLibraryUseCase: CreateLibraryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      street,
      city,
      state,
      cep,
      uf,
      neighborhood,
      number,
      hourOpen,
      hourClose,
    } = req.body;

    const library = await this.createLibraryUseCase.execute({
      name,
      street,
      city,
      state,
      cep,
      uf,
      neighborhood,
      number,
      hourOpen,
      hourClose,
    });

    return res.status(201).json(library);
  }
}
