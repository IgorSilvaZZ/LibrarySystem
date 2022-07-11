import { Router } from "express";

import createLoanController from "@modules/loans/useCases/createLoan";
import devolutionLoanController from "@modules/loans/useCases/devolutionLoan";
import listLoansController from "@modules/loans/useCases/listLoans";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const loansRoutes = Router();

loansRoutes.post("/", ensureAuthenticated, (req, res) => {
  return createLoanController().handle(req, res);
});

loansRoutes.post("/devolution/:id", ensureAuthenticated, (req, res) => {
  return devolutionLoanController().handle(req, res);
});

loansRoutes.get("/", ensureAuthenticated, ensureAdmin, (req, res) => {
  return listLoansController().handle(req, res);
});

export { loansRoutes };
