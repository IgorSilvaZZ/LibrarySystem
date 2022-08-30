import { Router } from "express";
import multer from "multer";

import createUserController from "@modules/users/useCases/createUser";
import authenticateUserController from "@modules/users/useCases/authenticateUser";
import listLoansUserController from "@modules/users/useCases/listLoansUser";
import findByIdUserController from "@modules/users/useCases/findById";
import updateAvatarUser from "@modules/users/useCases/updateAvatarUser";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "config/upload";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

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

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  (req, res) => {
    return updateAvatarUser().handle(req, res);
  }
);

export { usersRoutes };
