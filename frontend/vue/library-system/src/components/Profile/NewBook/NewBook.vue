<template>
  <div>
    <div class="section-title">
      <h2 class="title-container" style="font-size: 25px">Novo Livro</h2>
      <button @click="clickInput">Escolher arquivo CSV</button>
      <input
        @change="handleFile"
        id="fileInput"
        style="display: none"
        type="file"
      />
    </div>
    <p class="subtitle-container">
      Cadastre um novo livro para a bibilioteca <br />
      Ou escolha um arquivo csv para cadastrar novos livros
    </p>
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
            <option value="" selected>Selecione uma Linguagem</option>
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
            <option value="" selected>Selecione uma Categoria</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
          <select class="input-submit" v-model="book.author_id">
            <option value="" selected>Selecione um Autor</option>
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

import BooksServices from "@/services/BooksServices";

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
  async mounted() {
    try {
      const { data } = await BooksServices.listAuthors();

      this.authors = data;
    } catch (error) {
      this.$toast.error("Erro carregar a lista de autores!");
    }

    try {
      const { data } = await BooksServices.listCategories();

      this.categories = data;
    } catch (error) {
      this.$toast.error("Erro carregar a lista de categorias!");
    }
  },
  methods: {
    validation() {
      if (this.book.title === "") {
        this.$toast("Preencha o campo de titulo!");
        return false;
      }

      if (this.book.description === "") {
        this.$toast("Preencha o campo de descrição!");
        return false;
      }

      if (this.book.numberPages === "") {
        this.$toast("Preencha o campo de numero de paginas!");
        return false;
      }

      if (this.book.language === "") {
        this.$toast("Selecione uma Linguagem!");
        return false;
      }

      if (this.book.code === "") {
        this.$toast("Preencha o campo de codigo!");
        return false;
      }

      if (this.book.category_id === "") {
        this.$toast("Selecione uma Categoria!");
        return false;
      }

      if (this.book.author_id === "") {
        this.$toast("Selecione um Autor!");
        return false;
      }

      return true;
    },
    async saveBook() {
      if (this.validation()) {
        try {
          const headers = {
            authorization: `Bearer ${this.getToken}`,
          };

          await BooksServices.createBook(this.book, headers);

          this.$toast.success("Livro cadastrado com sucesso!");

          setTimeout(() => {
            this.$router.push("/profile");
          }, 1000);
        } catch (error) {
          this.$toast.error("Erro cadastrar livro!");
        }
      }
    },
    clickInput() {
      document.getElementById("fileInput").click();
    },
    handleFile(event) {
      const files = event.target.files;
      console.log(files);
    },
  },
};
</script>

<style scoped>
.section-title {
  display: flex;
  justify-content: space-between;

  width: 75%;
}

.section-title button {
  padding: 8px;

  background: #e84393;

  color: white;

  font-weight: 600;

  border: none;
  border-radius: 10px;

  cursor: pointer;
}

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
