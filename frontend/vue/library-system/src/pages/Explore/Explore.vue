<template>
  <div>
    <NavBar :isSearch="true" />
    <div class="container-explore">
      <div class="filter-menu-container">
        <p class="title-container">Categorias</p>
        <div class="section-filter-menu">
          <p class="filter-item">Todos Generos</p>
          <p class="filter-item">Aventura</p>
          <p class="filter-item">Ficção</p>
          <p class="filter-item">Ciencia</p>
          <p class="filter-item">Infantil Juvenil</p>
          <p class="filter-item">Misterio e Suspense</p>
          <p class="filter-item">Romance</p>
          <p class="filter-item">Artes e Fotográfia</p>
          <p class="filter-item">Historia</p>
          <p class="filter-item">Biografias</p>
        </div>
        <p class="title-container">Disponibilidade</p>
        <div class="section-filter-menu">
          <p class="filter-item">Disponivel</p>
          <p class="filter-item">Indisponivel</p>
        </div>
      </div>
      <div class="container-books">
        <div class="header-books">
          <p class="title-container">Filtrar por</p>
          <p style="color: #a3a3a1; font-weight: bold; font-size: 25px">
            Mais Recentes
          </p>
        </div>
        <section class="books-styled">
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
          <BoxItemBook
            widthBox="300px"
            heightBox="300px"
            marginBox="10px 10px 5px 10px"
            widthImage="50%"
            :isBorder="true"
          >
            <p slot="titleBook" class="title-book">Titulo Livro</p>
            <p slot="authorBook" class="title-book author-book">Autor Livro</p>
          </BoxItemBook>
        </section>
        <div class="handle-pages-box">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>Proximo</p>
        </div>
      </div>
    </div>
    <div class="new-book-container">
      <p class="title-container">Novos Livros</p>
      <span>Veja nossas novidades!</span>
      <div class="new-books-box">
        <BoxItemBook widthBox="200px" heightBox="200px" widthImage="40%">
          <p slot="titleBook" class="title-book">Titulo Livro</p>
          <p slot="authorBook" class="title-book author-book">Autor Livro</p>
        </BoxItemBook>
        <BoxItemBook widthBox="200px" heightBox="200px" widthImage="40%">
          <p slot="titleBook" class="title-book">Titulo Livro</p>
          <p slot="authorBook" class="title-book author-book">Autor Livro</p>
        </BoxItemBook>
        <BoxItemBook widthBox="200px" heightBox="200px" widthImage="40%">
          <p slot="titleBook" class="title-book">Titulo Livro</p>
          <p slot="authorBook" class="title-book author-book">Autor Livro</p>
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
};
</script>

<style scoped>
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

  height: 300px;
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
</style>
