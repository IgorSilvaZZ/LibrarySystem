<template>
  <div>
    <NavBar :isSearch="true" />

    <div class="container-info">
      <div class="section-info-book">
        <div class="image-book">
          <img src="../../assets/book-item.png" />
        </div>
        <div class="info-book">
          <span class="title-book">{{ book.title }}</span>
          <p class="author-book">{{ book.author.name }}</p>

          <div class="description-book">
            <p>
              {{ book.description }}
            </p>
          </div>

          <div class="footer-info">
            <div class="item-info">
              <span>Números de Paginas</span>
              <p>{{ book.numberPages }}</p>
            </div>
            <div class="item-info">
              <span>Categoria</span>
              <p>{{ book.category.name }}</p>
            </div>
          </div>

          <div
            class="container-buttons-info"
            style="width: 100%; justify-content: flex-start"
          >
            <button style="width: 40%">Realizar Emprestimo</button>
          </div>
        </div>
      </div>

      <div class="box-books">
        <span class="title-book">Outros livros da mesma categoria</span>
        <div class="section-books">
          <BoxItemBook widthBox="250px" heightBox="250px" widthImage="40%">
            <p slot="titleBook">Titulo Livro</p>
            <span slot="authorBook">Autor Livro</span>
          </BoxItemBook>
          <BoxItemBook widthBox="250px" heightBox="250px" widthImage="40%">
            <p slot="titleBook">Titulo Livro</p>
            <span slot="authorBook">Autor Livro</span>
          </BoxItemBook>
          <BoxItemBook widthBox="250px" heightBox="250px" widthImage="40%">
            <p slot="titleBook">Titulo Livro</p>
            <span slot="authorBook">Autor Livro</span>
          </BoxItemBook>
          <BoxItemBook widthBox="250px" heightBox="250px" widthImage="40%">
            <p slot="titleBook">Titulo Livro</p>
            <span slot="authorBook">Autor Livro</span>
          </BoxItemBook>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar/NavBar.vue";
import BoxItemBook from "@/components/BoxItemBook/BoxItemBook.vue";
import Footer from "@/components/Footer/Footer.vue";

import BooksServices from "@/services/BooksServices";

export default {
  name: "BookPage",
  data() {
    return {
      book: {
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
    };
  },
  async mounted() {
    if (!this.$route.params.id) {
      this.$router.push("/explore");
    } else {
      const { data } = await new BooksServices.listById(this.$route.params.id);

      this.book = data;
    }
  },
  components: { NavBar, BoxItemBook, Footer },
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

.container-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 95vw;
}

.section-info-book {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 400px;
}

.image-book {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 95%;
}

.image-book img {
  width: 50%;
}

.info-book {
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 80%;
}

.title-book {
  color: #fea6b5;

  font-size: 25px;
  font-weight: bold;
}

.author-book {
  color: #a3a3a1;
  font-weight: bold;
  font-size: 15px;

  margin-bottom: 12px;
}

.description-book {
  width: 90%;
  height: 40%;

  margin-bottom: 15px;

  text-overflow: ellipsis;
}

.description-book p {
  color: #a3a3a1;

  font-size: 15px;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 20%;

  margin-bottom: 15px;
}

.item-info {
  width: 30%;
  height: 100%;
}

.item-info span {
  color: #fea6b5;

  font-weight: bold;
}

.item-info p {
  color: #a3a3a1;

  font-weight: 300;
}
.box-books {
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 75%;
  height: 350px;
}

.section-books {
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 80%;
}

.section-books p {
  color: white;

  font-size: 13px;
  font-weight: 600;

  margin-bottom: 2px;

  cursor: pointer;
}

.section-books span {
  font-weight: 600;
  font-size: 13px;
  color: #a3a3a1;

  margin-bottom: 2px;

  cursor: pointer;
}
</style>
