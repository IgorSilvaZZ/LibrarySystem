import { Router } from "express";

import createUserController from "@modules/users/useCases/createUser";
import authenticateUserController from "@modules/users/useCases/authenticateUser";
import listLoansUserController from "@modules/users/useCases/listLoansUser";
import findByIdUserController from "@modules/users/useCases/findById";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  return createUserController().handle(req, res);
});

usersRoutes.post("/auth", (req, res) => {
  return authenticateUserController().handle(req, res);
});

usersRoutes.get("/loans", ensureAuthenticated, (req, res) => {
  return listLoansUserController().handle(req, res);
});

usersRoutes.get("/:id", (req, res) => {
  return findByIdUserController().handle(req, res);
});

export { usersRoutes };
