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
          <button>Ver mais</button>
        </div>
        <div class="info-book">
          <h2>{{ selectedBook.title }}</h2>
          <p>Quantidade Disponiveis: {{ selectedBook.quantity }}</p>
          <p>Categoria: {{ selectedBook.category.name }}</p>
          <span>{{ selectedBook.description }}</span>
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
        author: {
          name: "",
        },
        category: {
          name: "",
        },
      },
      books: [],
    };
  },
  methods: {
    openModalBook(book) {
      this.isOpenModalBook = true;
      this.selectedBook = book;
    },
  },
  mounted() {
    api
      .get("/books")
      .then(({ data }) => {
        this.books = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.info-image {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 30%;
  height: 95%;

  margin: 10px;
}

.info-image img {
  width: 50%;
}

.info-image button {
  width: 70%;

  padding: 10px;

  background: #e84393;

  color: white;
  font-weight: 700;

  border-radius: 10px;

  border: none;
  outline: none;

  cursor: pointer;
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
</style>
