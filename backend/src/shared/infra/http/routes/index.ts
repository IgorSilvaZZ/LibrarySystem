import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { librariesRoutes } from "./libraries.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/libraries", librariesRoutes);

export { router };
