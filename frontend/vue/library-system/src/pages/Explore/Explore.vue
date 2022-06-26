<template>
  <div>
    <Modal :isOpen="isOpenModalBook">
      <template slot="header">
        <span @click="isOpenModalBook = !isOpenModalBook">&times;</span>
      </template>
      <template slot="body">
        <div class="info-image">
          <img src="../../assets/book-item.png" />
          <button>Ver mais</button>
        </div>
        <div class="info-book">
          <h2>{{ selectedBook.title }}</h2>
          <p>Quantidade Disponiveis: {{ selectedBook.quantity }}</p>
          <p>Categoria: {{ filters[selectedBook.category.name] }}</p>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            dignissimos. Consectetur totam quae inventore quos recusandae dolore
            aliquam culpa, autem, distinctio, consequuntur deserunt corporis eos
            a labore officiis. Molestias, esse!</span
          >
        </div>
      </template>
    </Modal>
    <NavBar :isSearch="true" />
    <div class="container-explore">
      <div class="filter-menu-container">
        <p class="title-container">Categorias</p>
        <div class="section-filter-menu">
          <p
            v-for="(item, index) in optionsFilters"
            :key="index"
            class="filter-item"
            @click="filterCategory = `${item.filter}`"
          >
            {{ item.name }}
          </p>
        </div>
        <p class="title-container">Disponibilidade</p>
        <div class="section-filter-menu">
          <p class="filter-item" @click="filterCategory = 'available'">
            Disponivel
          </p>
          <p class="filter-item" @click="filterCategory = 'notAvailable'">
            Indisponivel
          </p>
        </div>
      </div>
      <div class="container-books">
        <template v-if="hasFilteredCategories.length">
          <div class="header-books">
            <p class="title-container">Filtrando por</p>
            <span
              style="
                color: #a3a3a1;
                font-weight: bold;
                font-size: 25px;
                border: none;
                outline: none;
              "
            >
              {{ filters[filterCategory] }}
            </span>
          </div>
          <section class="books-styled">
            <BoxItemBook
              widthBox="300px"
              heightBox="300px"
              marginBox="10px 10px 5px 10px"
              widthImage="50%"
              :isBorder="true"
              v-for="book in hasFilteredCategories"
              :key="book.id"
            >
              <p slot="titleBook" class="title-book" @click="openModal(book)">
                {{ book.title }}
              </p>
              <p slot="authorBook" class="title-book author-book">
                {{ book.author.name }}
              </p>
            </BoxItemBook>
          </section>
        </template>
        <template v-else>
          <div class="not-found-books">
            <span>Nenhum livro encontrado com essa categoria!</span>
            <img src="../../assets/books-not-found.png" />
          </div>
        </template>
      </div>
    </div>
    <div class="new-book-container">
      <p class="title-container">Novos Livros</p>
      <span>Veja nossas novidades!</span>
      <div class="new-books-box">
        <BoxItemBook
          v-for="book in books.slice(Math.max(books.length - 3, 1))"
          :key="book.id"
          widthBox="300px"
          heightBox="250px"
          widthImage="40%"
        >
          <p slot="titleBook" class="title-book">{{ book.title }}</p>
          <p slot="authorBook" class="title-book author-book">
            {{ book.author }}
          </p>
        </BoxItemBook>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar/NavBar.vue";
import BoxItemBook from "@/components/BoxItemBook/BoxItemBook.vue";
import Footer from "@/components/Footer/Footer.vue";
import Modal from "@/components/Modal/Modal.vue";

import { api } from "../../services/api";

export default {
  name: "ExploreApp",
  components: {
    NavBar,
    BoxItemBook,
    Footer,
    Modal,
  },
  data() {
    return {
      filterCategory: "all",
      isOpenModalBook: false,
      selectedBook: {},
      optionsFilters: [
        { name: "Todos Generos", filter: "all" },
        { name: "Aventura", filter: "adventure" },
        { name: "Ficção", filter: "fiction" },
        { name: "Ciencia", filter: "science" },
        { name: "Infantil Juvenil", filter: "juvenile" },
        { name: "Suspense", filter: "thriller" },
        { name: "Romance", filter: "romance" },
        { name: "Artes", filter: "art" },
        { name: "Historia", filter: "history" },
        { name: "Biografias", filter: "biography" },
      ],
      books: [],
      filters: {
        all: "Todos Generos",
        adventure: "Aventura",
        fiction: "Ficção",
        science: "Ciencia",
        juvenile: "Infantil Juvenil",
        thriller: "Suspense",
        romance: "Romance",
        art: "Artes",
        history: "Historia",
        biography: "Biografias",
      },
    };
  },
  methods: {
    openModal(book) {
      this.isOpenModalBook = true;
      this.selectedBook = book;
    },
  },
  computed: {
    hasFilteredCategories() {
      return this.filterCategory !== "all"
        ? this.books.filter((book) => book.category.name == this.filterCategory)
        : this.books;
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
* ::-webkit-scrollbar {
  width: 10px;
  background: white;
}
* ::-webkit-scrollbar-thumb {
  background: #fea6b5;
  border-radius: 5px;
}

.container-explore {
  display: flex;
  align-items: flex-start;

  width: 95vw;

  margin: 40px 0;
}

.title-container {
  color: #fea6b5;

  font-size: 25px;
  font-weight: bold;

  margin-right: 10px;
  margin-bottom: 5px;
}

.filter-menu-container {
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 20%;
}

.section-filter-menu {
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 90%;

  margin: 0 10px 30px 10px;
}

.filter-item {
  font-size: 13px;
  font-weight: 500;

  color: #a3a3a1;

  cursor: pointer;

  padding: 5px;

  transition: color 0.3s;
}

.filter-item:hover {
  color: #fea6b5;
}

.container-books {
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 900px;

  margin-bottom: 50px;

  overflow-y: auto;
}

.header-books {
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
}

.books-styled {
  display: flex;
  flex-wrap: wrap;
  row-gap: 0%;

  height: 90%;
  width: 95%;

  margin: 0px 10px;
}

.title-book {
  color: white;

  font-size: 17px;
  font-weight: 600;

  margin-bottom: 2px;

  cursor: pointer;
}

.author-book {
  color: #a3a3a1;

  font-size: 13px;
}

.handle-pages-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 auto;

  width: 60%;
  height: 70px;
}

.handle-pages-box p {
  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  color: #a3a3a1;
}

.handle-pages-box p:hover {
  color: #fea6b5;
}

.new-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 400px;
  width: 95vw;

  background: #f5f6fa;
}

.new-book-container span {
  font-size: 15px;
  font-weight: 700;

  color: #a3a3a1;
}

.new-books-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 90%;
  width: 90%;
}

.not-found-books {
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 90%;
  width: 95%;

  margin: 0px 10px;
}

.not-found-books span {
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 30px;

  color: #a3a3a1;
}

.not-found-books img {
  width: 70%;
}

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
