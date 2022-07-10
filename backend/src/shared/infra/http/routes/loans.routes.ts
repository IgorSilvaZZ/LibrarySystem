import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import createLoanController from "@modules/loans/useCases/createLoan";
import devolutionLoanController from "@modules/loans/useCases/devolutionLoan";

const loansRoutes = Router();

loansRoutes.post("/", ensureAuthenticated, (req, res) => {
  return createLoanController().handle(req, res);
});

loansRoutes.post("/devolution/:id", ensureAuthenticated, (req, res) => {
  return devolutionLoanController().handle(req, res);
});

export { loansRoutes };
