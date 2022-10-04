import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("Token invalido!");
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      process.env.TOKEN_SECRET
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const userExists = await usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("Usuario não existe!");
    }

    req.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new Error("Token Invalido!!");
  }
}
