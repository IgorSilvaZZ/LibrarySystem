<template>
  <div>
    <NavBar />
    <div class="container-profile">
      <div class="menu-options-profile">
        <p class="title-container">Pessoal</p>
        <div class="box-menu-items">
          <p class="menu-item">Geral</p>
          <p class="menu-item">Meus Livros</p>
          <p class="menu-item">Meus Emprestimos</p>
        </div>
        <p class="title-container">Livros</p>
        <div class="box-menu-items">
          <p class="menu-item">Criar Novo Livro</p>
          <p class="menu-item">Editar Livro & Deletar</p>
        </div>
      </div>
      <div class="section-profile">
        <BookEdit />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar/NavBar.vue";
import General from "@/components/Profile/General/General.vue";
import NewBook from "@/components/Profile/NewBook/NewBook.vue";
import BookEdit from "@/components/Profile/BookEdit/BookEdit.vue";

export default {
  name: "ProfilePage",
  components: {
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    General,
    // eslint-disable-next-line vue/no-unused-components
    NewBook,
    BookEdit,
  },
};
</script>

<style>
.container-profile {
  display: flex;
  align-items: flex-start;

  width: 95vw;
  height: 100%;

  margin: 20px 0;
}

.menu-options-profile {
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 20%;
}

.title-container {
  color: #fea6b5;

  font-size: 20px;
  font-weight: bold;

  margin-right: 10px;
  margin-bottom: 5px;
}

.box-menu-items {
  display: flex;
  flex-direction: column;

  width: 90%;

  margin: 0 10px 30px 5px;
}

.menu-item {
  font-size: 13px;
  font-weight: 500;

  color: #a3a3a1;

  cursor: pointer;

  padding: 5px;

  transition: color 0.3s;
}

.menu-item:hover {
  color: #fea6b5;
}

.section-profile {
  width: 80%;
}

.subtitle-container {
  font-size: 16px;
  font-weight: 400;

  color: #a3a3a1;

  margin-bottom: 50px;
}
</style>
