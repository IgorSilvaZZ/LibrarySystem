<template>
  <div
    class="nav-bar-container"
    :style="[
      { justifyContent: isSearch ? 'space-between' : 'flex-start' },
      { borderBottom: isSearch ? '1px solid #bdc3c7' : 'none' },
    ]"
  >
    <div class="logo-book" :style="[{ width: isSearch ? '40%' : '20%' }]">
      <img @click="handleHome" src="../../assets/book-logo.png" />
      <span>Slibrary</span>
    </div>
    <template v-if="isSearch">
      <InputSearch
        colorInput="#b9b9b7"
        widthContainer="50%"
        heightContainer="50%"
        backgroundContainer="transparent"
        widthImage="3%"
        justifyContainer="flex-start"
        alignItems="center"
        placeHolder="Pesquise um livro"
      />
      <div class="container-icons">
        <img src="../../assets/user.png" />
        <img src="../../assets/bell.png" />
      </div>
    </template>
    <template v-else>
      <div class="options-menu">
        <router-link to="/">Inicio</router-link>
        <a>Sobre</a>
        <router-link to="/explore">Explorar</router-link>
        <a>Meus livros</a>
        <router-link to="/login">Meu Perfil</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import InputSearch from "../InputSearch/InputSearch.vue";

export default {
  name: "NavBarComponent",
  components: {
    InputSearch,
  },
  props: {
    isSearch: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.nav-bar-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 95vw;
  height: 80px;

  border-bottom: none;
}

.logo-book {
  display: flex;
  align-items: center;

  height: 100%;

  cursor: pointer;
}

.logo-book img {
  width: 50px;
}

.logo-book span {
  color: #a3a3a1;

  font-size: 20px;
  font-weight: 600;

  margin: 0px 10px;
}

.options-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  height: 100%;
}

.options-menu a {
  font-weight: 500;

  color: #a3a3a1;

  text-decoration: none;

  cursor: pointer;

  padding: 5px;

  transition: all 0.3s;
}

.options-menu a:hover {
  border-radius: 5px;

  color: #fea6b5;

  background: #ffe0e4;
}

.container-icons {
  display: flex;
  align-items: center;

  width: 10%;
  height: 50%;
}

.container-icons img {
  width: 15px;

  margin: 10px;

  cursor: pointer;
}
</style>
