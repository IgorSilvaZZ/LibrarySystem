import { api } from "@/services/api";

class LoansService {
  async list(headers) {
    return await api.get("/loans", {
      headers,
    });
  }

  async listLoansByUser(headers) {
    return await api.get("/users/loans", {
      headers,
    });
  }

  async devolutionLoan(idLoan, headers) {
    return await api.post(`/loans/devolution/${idLoan}`, null, {
      headers,
    });
  }
}

export default new LoansService();
