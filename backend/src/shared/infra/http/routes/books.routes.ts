import { Router } from "express";

const booksRoutes = Router();

import createBookController from "@modules/books/useCases/createBook";
import createAuthorController from "@modules/books/useCases/createAuthor";
import listBooksController from "@modules/books/useCases/listBooks";
import listAuthorsController from "@modules/books/useCases/listAuthors";
import updateBookController from "@modules/books/useCases/updateBook";
import deleteBookController from "@modules/books/useCases/deleteBook";
import findByIdBookController from "@modules/books/useCases/findById";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

booksRoutes.post("/authors", ensureAuthenticated, ensureAdmin, (req, res) => {
  return createAuthorController().handle(req, res);
});

booksRoutes.get("/authors", (req, res) => {
  return listAuthorsController().handle(req, res);
});

booksRoutes.post("/", ensureAuthenticated, ensureAdmin, (req, res) => {
  return createBookController().handle(req, res);
});

booksRoutes.get("/", (req, res) => {
  return listBooksController().handle(req, res);
});

booksRoutes.get("/:id", (req, res) => {
  return findByIdBookController().handle(req, res);
});

booksRoutes.put("/:id", ensureAuthenticated, ensureAdmin, (req, res) => {
  return updateBookController().handle(req, res);
});

booksRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, (req, res) => {
  return deleteBookController().handle(req, res);
});

export { booksRoutes };
