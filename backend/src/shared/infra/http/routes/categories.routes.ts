import { Router } from "express";

import createCategoryController from "@modules/categories/useCases/createCategory";
import listCategoriesController from "@modules/categories/useCases/listCategories";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const categoriesRoutes = Router();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController().handle(req, res);
});

export { categoriesRoutes };
