import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { librariesRoutes } from "./libraries.routes";
import { categoriesRoutes } from "./categories.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/libraries", librariesRoutes);
router.use("/categories", categoriesRoutes);

export { router };
