import { Router } from "express";

import createLibraryController from "@modules/libraries/useCases/createLibrary";
import listLibrariesController from "@modules/libraries/useCases/listLibraries";

const librariesRoutes = Router();

librariesRoutes.post("/", (req, res) => {
  return createLibraryController().handle(req, res);
});

librariesRoutes.get("/", (req, res) => {
  return listLibrariesController().handle(req, res);
});

export { librariesRoutes };
