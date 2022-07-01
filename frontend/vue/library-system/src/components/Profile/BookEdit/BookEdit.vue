<template>
  <div>
    <Modal
      :isOpen="isOpenModalBook"
      style="align-items: flex-start; justify-content: flex-start"
    >
      <template slot="header">
        <span @click="isOpenModalBook = !isOpenModalBook">&times;</span>
      </template>
      <template slot="body">
        <div class="info-image">
          <img src="../../../assets/book-item.png" />
        </div>
        <div class="info-book">
          <input
            class="input-submit"
            style="width: 100%"
            type="text"
            :value="selectedBook.title"
          />
          <div class="input-container">
            <select
              class="input-submit"
              style="width: 50%"
              v-model="selectedBook.author_id"
            >
              <option
                v-for="author in authors"
                :value="selectedBook.author_id"
                :key="author.id"
              >
                {{ author.name }}
              </option>
            </select>
            <input
              class="input-submit"
              type="text"
              style="width: 45%"
              v-model="selectedBook.quantity"
            />
          </div>
          <div class="input-container">
            <select
              class="input-submit"
              style="width: 50%"
              v-model="selectedBook.category_id"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="selectedBook.category_id"
              >
                {{ category.name }}
              </option>
            </select>
            <select
              class="input-submit"
              style="width: 45%"
              v-model="selectedBook.language"
            >
              <option
                v-for="language in languages"
                :key="language"
                :value="selectedBook.language"
              >
                {{ language }}
              </option>
            </select>
          </div>

          <textarea
            class="input-submit"
            type="email"
            placeholder="Descrição"
            style="width: 100%"
            v-model="selectedBook.description"
          ></textarea>
          <div class="container-buttons-info">
            <button @click="updateBook">Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      </template>
    </Modal>

    <h2 class="title-container" style="font-size: 25px">
      Gerencie Todos os livros
    </h2>
    <p class="subtitle-container">
      Edite todos os livros que contem na biblioteca
    </p>
    <ItemsBooks :books="books" @openModal="openModalBook" />
  </div>
</template>

<script>
import { api } from "../../../services/api";
import ItemsBooks from "@/components/ItemsBooks/ItemsBooks.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "BookEditComponent",
  components: {
    Modal,
    ItemsBooks,
  },
  data() {
    return {
      isOpenModalBook: false,
      selectedBook: {
        id: "",
        title: "",
        description: "",
        numberPages: 0,
        language: "",
        code: "",
        quantity: 0,
        category_id: "",
        author_id: "",
      },
      languages: ["Português", "Inglês", "Espanhol", "Francês"],
      books: [],
      authors: [],
      categories: [],
    };
  },
  methods: {
    openModalBook(book) {
      this.isOpenModalBook = true;
      this.selectedBook = book;

      this.getAuthors();
      this.getCategories();
    },
    getBooks() {
      api
        .get("/books")
        .then(({ data }) => {
          this.books = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAuthors() {
      api
        .get("/books/authors")
        .then(({ data }) => {
          this.authors = data;
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          this.$toast.error("Erro carregar a lista de autores!");
        });
    },
    getCategories() {
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
    updateBook() {
      api
        .put(`/books/${this.selectedBook.id}`, this.selectedBook)
        // eslint-disable-next-line no-unused-vars
        .then(({ data }) => {
          this.$toast.success("Livro atualizado com sucesso!");

          this.isOpenModalBook = false;
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          this.$toast.error("Erro ao atualizar o livro!");

          this.isOpenModalBook = false;
        });
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style scoped>
.info-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 30%;
  height: 95%;

  margin: 10px;
}

.info-image img {
  width: 50%;
}

.info-book {
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 95%;

  margin: 10px;
}

.info-book h2 {
  color: #fea6b5;

  margin-bottom: 10px;
}

.info-book p {
  font-size: 15px;

  margin-bottom: 15px;
}

.info-book span {
  font-size: 15px;

  color: #a3a3a1;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-buttons-info {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 80%;
}

.container-buttons-info button {
  width: 40%;

  padding: 10px;

  background: #e84393;

  color: white;
  font-weight: 700;

  border-radius: 10px;

  border: none;
  outline: none;

  cursor: pointer;
}
</style>
