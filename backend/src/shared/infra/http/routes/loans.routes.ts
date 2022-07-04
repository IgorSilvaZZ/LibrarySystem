import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import createLoanController from "@modules/loans/useCases/createLoan";

const loansRoutes = Router();

loansRoutes.post("/", ensureAuthenticated, (req, res) => {
  return createLoanController().handle(req, res);
});

export { loansRoutes };
