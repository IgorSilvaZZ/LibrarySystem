import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id: user_id } = req.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id);

  if (!user.isAdmin) {
    throw new Error("Usuario não é administrador!");
  }

  return next();
}
