import { api } from "@/services/api";

class BooksServices {
  async list() {
    return await api.get("/books");
  }

  async listById(id) {
    return await api.get(`/books/${id}`);
  }

  async listAuthors() {
    return await api.get("/books/authors");
  }

  async listCategories() {
    return await api.get("/categories");
  }

  async createBook(data, headers) {
    return await api.post("/books", data, {
      headers,
    });
  }

  async createBookCsv(data, headers) {
    return await api.post("/books/file", data, {
      headers,
    });
  }

  async searchBook(filter) {
    return await api.get("/books/search", {
      params: {
        filter,
      },
    });
  }

  async getBookCategory(name) {
    return await api.get("/books/categories", {
      params: {
        name,
      },
    });
  }
}

export default new BooksServices();
