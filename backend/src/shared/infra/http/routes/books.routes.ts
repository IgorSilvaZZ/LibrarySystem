import { Router } from "express";
import multer from "multer";

const booksRoutes = Router();

import createBookController from "@modules/books/useCases/createBook";
import createAuthorController from "@modules/books/useCases/createAuthor";
import listBooksController from "@modules/books/useCases/listBooks";
import listAuthorsController from "@modules/books/useCases/listAuthors";
import updateBookController from "@modules/books/useCases/updateBook";
import deleteBookController from "@modules/books/useCases/deleteBook";
import findByIdBookController from "@modules/books/useCases/findById";
import searchBooksController from "@modules/books/useCases/searchBooks";
import listBookCategoryController from "@modules/books/useCases/listBookCategory";
import createBookFileController from "@modules/books/useCases/createBookFile";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const multerConfig = multer();

booksRoutes.post("/authors", ensureAuthenticated, ensureAdmin, (req, res) => {
  return createAuthorController().handle(req, res);
});

booksRoutes.get("/authors", (req, res) => {
  return listAuthorsController().handle(req, res);
});

booksRoutes.post("/", ensureAuthenticated, ensureAdmin, (req, res) => {
  return createBookController().handle(req, res);
});

booksRoutes.post(
  "/file",
  ensureAuthenticated,
  ensureAdmin,
  multerConfig.single("file"),
  (req, res) => {
    return createBookFileController().handle(req, res);
  }
);

booksRoutes.get("/", (req, res) => {
  return listBooksController().handle(req, res);
});

booksRoutes.get("/categories", (req, res) => {
  return listBookCategoryController().handle(req, res);
});

booksRoutes.get("/search", (req, res) => {
  return searchBooksController().handle(req, res);
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
