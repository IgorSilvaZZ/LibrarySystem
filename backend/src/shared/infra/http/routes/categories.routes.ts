import { Router } from "express";

import createCategoryController from "@modules/categories/useCases/createCategory";
import listCategoriesController from "@modules/categories/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController().handle(req, res);
});

export { categoriesRoutes };
