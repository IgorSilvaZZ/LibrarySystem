import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { join } from "path";

import createConnection from "@shared/infra/typeorm";
import { router } from "./routes";
import { ValidationErrors } from "@shared/errors/ValidationErrors";

createConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  "/images",
  express.static(join(__dirname, "..", "..", "..", "..", "tmp/avatar"))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationErrors) {
    return res.status(err.statusCode).json({
      message: "Campos Invalidos!",
      issues: err.issues,
    });
  }

  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

export { app };
