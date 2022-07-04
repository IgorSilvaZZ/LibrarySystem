import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { booksRoutes } from "./books.routes";
import { loansRoutes } from "./loans.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/books", booksRoutes);
router.use("/loans", loansRoutes);

export { router };
