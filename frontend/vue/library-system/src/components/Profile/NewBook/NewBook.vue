<template>
  <div>
    <h2 class="title-container" style="font-size: 25px">Novo Livro</h2>
    <p class="subtitle-container">Cadastre um novo livro para a bibilioteca</p>
    <div class="container-new-book">
      <div
        class="box-info"
        style="height: 90%; width: 90%; margin-bottom: 20px"
      >
        <div class="input-container">
          <input
            class="input-submit"
            style="width: 50%"
            type="text"
            placeholder="Titulo"
            v-model="book.title"
          />
          <input
            class="input-submit"
            style="width: 30%"
            type="email"
            placeholder="Codigo"
            v-model="book.code"
          />
        </div>
        <div class="input-container">
          <textarea
            class="input-submit"
            type="email"
            placeholder="Descrição"
            style="width: 82%"
            v-model="book.description"
          ></textarea>
        </div>
        <div class="input-container">
          <input
            class="input-submit"
            type="text"
            placeholder="Numero de Paginas"
            v-model="book.numberPages"
          />
          <select class="input-submit" v-model="book.language">
            <option
              v-for="language in languages"
              :key="language"
              :value="language"
            >
              {{ language }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <select class="input-submit" v-model="book.category_id">
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
          <select class="input-submit" v-model="book.author_id">
            <option
              v-for="author in authors"
              :value="author.id"
              :key="author.id"
            >
              {{ author.name }}
            </option>
          </select>
        </div>
        <div class="box-submit">
          <button class="button-submit" @click="saveBook">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { api } from "@/services/api";

export default {
  name: "NewBookComponent",
  data() {
    return {
      authors: [],
      categories: [],
      languages: ["Português", "Inglês", "Espanhol", "Francês"],
      book: {
        title: "",
        description: "",
        numberPages: "",
        language: "",
        code: "",
        category_id: "",
        author_id: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  mounted() {
    api
      .get("/books/authors")
      .then(({ data }) => {
        this.authors = data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        this.$toast.error("Erro carregar a lista de autores!");
      });

    api
      .get("/categories")
      .then(({ data }) => {
        this.categories = data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        this.$toast.error("Erro carregar a lista de categorias!");
      });
  },
  methods: {
    saveBook() {
      api
        .post("books", this.book, {
          headers: {
            authorization: `Bearer ${this.getToken}`,
          },
        })
        // eslint-disable-next-line no-unused-vars
        .then(({ data }) => {
          this.$toast.success("Livro cadastrado com sucesso!");

          setTimeout(() => {
            this.$router.push("/profile");
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          this.$toast.error("Erro cadastrar livro!");
        });
    },
  },
};
</script>

<style scoped>
.input-submit {
  width: 40%;

  margin: 10px;
}

.box-submit {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
}
</style>
