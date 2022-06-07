import { createServer, Model, Response } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      book: Model,
      user: Model,
    },

    seeds(server) {
      server.create("book", {
        id: 1,
        title: "Harry Potter E a Pedra Filosofal",
        author: "JK.Rowling",
        category: "adventure",
        available: true,
        quantity: 5,
      });
      server.create("book", {
        id: 2,
        title: "Mitologia Nórdica",
        author: "Neil Gaiman",
        category: "fiction",
        available: true,
        quantity: 10,
      });
      server.create("book", {
        id: 3,
        title: "A revolução dos bichos",
        author: "George Orwell",
        category: "fiction",
        available: false,
        quantity: 8,
      });
      server.create("book", {
        id: 4,
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        category: "juvenile",
        available: true,
        quantity: 3,
      });
      server.create("book", {
        id: 5,
        title: "Alice no País das Maravilhas",
        author: "Lewis Carroll",
        category: "juvenile",
        available: true,
        quantity: 1,
      });
      server.create("book", {
        id: 6,
        title: "A Garota do Lago",
        author: "Charlie Donlea",
        category: "thriller",
        available: false,
        quantity: 12,
      });
      server.create("book", {
        id: 7,
        title: "A Culpa É das Estrelas",
        author: "John Green",
        category: "romance",
        available: true,
        quantity: 14,
      });
      server.create("book", {
        id: 8,
        title: "Teto Para Dois",
        author: "Beth O Leary",
        category: "romance",
        available: true,
        quantity: 4,
      });
      server.create("book", {
        id: 9,
        title: "Eleanor & Park",
        author: "Rainbow Rowell",
        category: "romance",
        available: false,
        quantity: 4,
      });
      server.create("book", {
        id: 10,
        title: "A Seleção",
        author: "Kiera Cass",
        category: "romance",
        available: true,
        quantity: 2,
      });
      server.create("book", {
        id: 11,
        title: "A História da Arte",
        author: "Ernst Gombrich",
        category: "art",
        available: true,
        quantity: 3,
      });
      server.create("book", {
        id: 12,
        title: "História da Beleza",
        author: "Umberto Eco",
        category: "art",
        available: false,
        quantity: 4,
      });
      server.create("book", {
        id: 13,
        title: "Uma Breve História do Mundo",
        author: "Geoffrey Blainey",
        category: "history",
        available: true,
        quantity: 5,
      });
      server.create("book", {
        id: 14,
        title: "História do Brasil",
        author: "Boris Fausto",
        category: "history",
        available: true,
        quantity: 7,
      });
      server.create("book", {
        id: 15,
        title: "1808",
        author: "Laurentino Gomes",
        category: "history",
        available: true,
        quantity: 7,
      });
      server.create("book", {
        id: 16,
        title: "A Volta ao Mundo em 80 Dias",
        author: "Júlio Verne",
        category: "adventure",
        available: false,
        quantity: 9,
      });
      server.create("book", {
        id: 17,
        title: "A Ilha do Tesouro",
        author: "Robert Louis Stevenson",
        category: "adventure",
        available: true,
        quantity: 14,
      });
      server.create("book", {
        id: 18,
        title: "O Hobbit",
        author: "J. R. R. Tolkien",
        category: "adventure",
        available: true,
        quantity: 14,
      });
      server.create("user", {
        name: "Igor Silva",
        email: "igor@email.com",
        cpf: "1111111111",
        rg: "1111111111",
        password: "senha",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.books.all();
      });

      this.post("/users", (schema, request) => {
        const newUser = JSON.parse(request.requestBody);

        const users = schema.users.all();

        const userExists = users.models.find(
          (userFind) =>
            userFind.email === newUser.email || userFind.cpf === newUser.cpf
        );

        if (userExists) {
          return new Response(400);
        }

        return schema.users.create(newUser);
      });

      this.post("/auth", (schema, request) => {
        const userAuth = JSON.parse(request.requestBody);

        const email = userAuth.email;
        const password = userAuth.password;

        const users = schema.users.all();

        const userExists = users.models.find(
          (userFind) =>
            userFind.email === email && userFind.password === password
        );

        if (userExists) {
          return userExists;
        } else {
          return new Response(400, { errors: "Email/Senha invalidos!" });
        }
      });
    },
  });

  return server;
}
