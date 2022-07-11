<template>
  <div>
    <NavBar />
    <div class="container-profile">
      <div class="menu-options-profile">
        <p class="title-container">Pessoal</p>
        <div class="box-menu-items">
          <p class="menu-item" @click="optionProfile = 'general'">Geral</p>
          <p class="menu-item" @click="optionProfile = 'myBooks'">
            Meus Livros
          </p>
          <p
            class="menu-item"
            @click="optionProfile = 'myLoans'"
            v-if="!user.isAdmin"
          >
            Meus Emprestimos
          </p>
          <p class="menu-item" @click="optionProfile = 'myLoans'" v-else>
            Todos Emprestimos Realizados
          </p>
        </div>
        <template v-if="user.isAdmin">
          <p class="title-container">Livros</p>
          <div class="box-menu-items">
            <p class="menu-item" @click="optionProfile = 'newBook'">
              Criar Novo Livro
            </p>
            <p class="menu-item" @click="optionProfile = 'bookEdit'">
              Editar Livro & Deletar
            </p>
          </div>
        </template>
      </div>
      <div class="section-profile">
        <General v-show="optionProfile == 'general'" />
        <NewBook v-show="optionProfile == 'newBook'" />
        <BookEdit v-show="optionProfile == 'bookEdit'" />
        <MyLoans v-show="optionProfile == 'myLoans'" />
        <MyBooks v-show="optionProfile == 'myBooks'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import NavBar from "@/components/Navbar/NavBar.vue";
import General from "@/components/Profile/General/General.vue";
import NewBook from "@/components/Profile/NewBook/NewBook.vue";
import BookEdit from "@/components/Profile/BookEdit/BookEdit.vue";
import MyLoans from "@/components/Profile/MyLoans/MyLoansPage.vue";
import MyBooks from "@/components/Profile/MyBooks/MyBooks.vue";

export default {
  name: "ProfilePage",
  components: {
    NavBar,
    General,
    NewBook,
    BookEdit,
    MyLoans,
    MyBooks,
  },
  computed: mapState("auth", {
    user: (state) => state.user,
  }),
  data() {
    return {
      optionProfile: "general",
    };
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
