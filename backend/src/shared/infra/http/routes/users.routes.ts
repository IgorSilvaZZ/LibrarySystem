import { Router } from "express";

import createUserController from "@modules/users/useCases/createUser";
import authenticateUserController from "@modules/users/useCases/authenticateUser";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  return createUserController().handle(req, res);
});

usersRoutes.post("/auth", (req, res) => {
  return authenticateUserController().handle(req, res);
});

export { usersRoutes };
