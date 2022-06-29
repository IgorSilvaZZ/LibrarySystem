import { Router } from "express";

const booksRoutes = Router();

import createBookController from "@modules/books/useCases/createBook";
import createAuthorController from "@modules/books/useCases/createAuthor";
import listBooksController from "@modules/books/useCases/listBooks";
import listAuthorsController from "@modules/books/useCases/listAuthors";

booksRoutes.post("/authors", (req, res) => {
  return createAuthorController().handle(req, res);
});

booksRoutes.get("/authors", (req, res) => {
  return listAuthorsController().handle(req, res);
});

booksRoutes.post("/", (req, res) => {
  return createBookController().handle(req, res);
});

booksRoutes.get("/", (req, res) => {
  return listBooksController().handle(req, res);
});

export { booksRoutes };
