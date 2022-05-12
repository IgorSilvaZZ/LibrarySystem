<template>
  <div>
    <NavBar :isSearch="true" />
    <div class="container-explore">
      <div class="filter-menu-container">
        <p class="title-container">Categorias</p>
        <div class="section-filter-menu">
          <p class="filter-item" @click="filterCategory = 'all'">
            Todos Generos
          </p>
          <p class="filter-item" @click="filterCategory = 'adventure'">
            Aventura
          </p>
          <p class="filter-item" @click="filterCategory = 'fiction'">Ficção</p>
          <p class="filter-item" @click="filterCategory = 'science'">Ciencia</p>
          <p class="filter-item" @click="filterCategory = 'juvenile'">
            Infantil Juvenil
          </p>
          <p class="filter-item" @click="filterCategory = 'thriller'">
            Suspense
          </p>
          <p class="filter-item" @click="filterCategory = 'romance'">Romance</p>
          <p class="filter-item" @click="filterCategory = 'art'">Artes</p>
          <p class="filter-item" @click="filterCategory = 'history'">
            Historia
          </p>
          <p class="filter-item" @click="filterCategory = 'biography'">
            Biografias
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
              <p slot="titleBook" class="title-book">{{ book.title }}</p>
              <p slot="authorBook" class="title-book author-book">
                {{ book.author }}
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

export default {
  name: "ExploreApp",
  components: {
    NavBar,
    BoxItemBook,
    Footer,
  },
  data() {
    return {
      filterCategory: "all",
      books: [
        {
          id: 1,
          title: "Harry Potter E a Pedra Filosofal",
          author: "JK.Rowling",
          category: "adventure",
          available: true,
        },
        {
          id: 2,
          title: "Mitologia Nórdica",
          author: "Neil Gaiman",
          category: "fiction",
          available: true,
        },
        {
          id: 3,
          title: "A revolução dos bichos",
          author: "George Orwell",
          category: "fiction",
          available: false,
        },
        {
          id: 4,
          title: "O Pequeno Príncipe",
          author: "Antoine de Saint-Exupéry",
          category: "Antoine de Saint-Exupéry",
          available: true,
        },
        {
          id: 5,
          title: "Alice no País das Maravilhas",
          author: "Lewis Carroll",
          category: "juvenile",
          available: true,
        },
        {
          id: 6,
          title: "A Garota do Lago",
          author: "Charlie Donlea",
          category: "thriller",
          available: false,
        },
        {
          id: 7,
          title: "A Culpa É das Estrelas",
          author: "John Green",
          category: "romance",
          available: true,
        },
        {
          id: 8,
          title: "Teto Para Dois",
          author: "Beth O Leary",
          category: "romance",
          available: true,
        },
        {
          id: 9,
          title: "Eleanor & Park",
          author: "Rainbow Rowell",
          category: "romance",
          available: false,
        },
        {
          id: 10,
          title: "A Seleção",
          author: "Kiera Cass",
          category: "romance",
          available: true,
        },
        {
          id: 11,
          title: "A História da Arte",
          author: "Ernst Gombrich",
          category: "art",
          available: true,
        },
        {
          id: 12,
          title: "História da Beleza",
          author: "Umberto Eco",
          category: "art",
          available: false,
        },
        {
          id: 13,
          title: "Uma Breve História do Mundo",
          author: "Geoffrey Blainey",
          category: "history",
          available: true,
        },
        {
          id: 14,
          title: "História do Brasil",
          author: "Boris Fausto",
          category: "history",
          available: true,
        },
        {
          id: 15,
          title: "1808",
          author: "Laurentino Gomes",
          category: "history",
          available: true,
        },
        {
          id: 16,
          title: "A Volta ao Mundo em 80 Dias",
          author: "Júlio Verne",
          category: "adventure",
          available: false,
        },
        {
          id: 17,
          title: "A Ilha do Tesouro",
          author: "Robert Louis Stevenson",
          category: "adventure",
          available: true,
        },
        {
          id: 18,
          title: "O Hobbit",
          author: "J. R. R. Tolkien",
          category: "adventure",
          available: true,
        },
      ],
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
        available: "Disponivel",
        notAvailable: "Indisponivel",
      },
    };
  },
  computed: {
    hasFilteredCategories() {
      if (this.filterCategory === "available") {
        return this.books.filter((book) => book.available);
      } else if (this.filterCategory === "notAvailable") {
        return this.books.filter((book) => !book.available);
      } else {
        return this.filterCategory !== "all"
          ? this.books.filter((book) => book.category == this.filterCategory)
          : this.books;
      }
    },
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
</style>
