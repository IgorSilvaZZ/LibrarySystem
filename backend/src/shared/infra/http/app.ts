import "reflect-metadata";

import express from "express";

import createConnection from "@shared/infra/typeorm";

createConnection();

const app = express();

app.use(express.json());

export { app };
