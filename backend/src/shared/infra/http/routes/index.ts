import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);

export { router };
