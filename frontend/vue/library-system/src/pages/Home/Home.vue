<template>
  <div>
    <NavBar />
    <div class="banner-container">
      <div class="banner-information">
        <span>New platform with worldwide books</span>
        <p>
          Start collection your own library and read your first book for free
          now
        </p>
        <InputSearch
          colorInput="#b9b9b7"
          widthContainer="70%"
          heightContainer="10%"
          backgroundContainer="#ebebeb"
          widthImage="10%"
          placeHolder="Encontre um livro"
          justifyContainer="center"
          alignItems="center"
        />
      </div>
      <div class="banner-image">
        <img src="../../assets/banner.png" alt="Banner Image" />
      </div>
    </div>
    <div class="container-use">
      <h1>Simples de Usar</h1>
      <div class="box-steps-use">
        <div class="item-step">
          <img src="../../assets/user-plus.png" alt="Create account image" />
          <span>Criar conta</span>
          <p>Crie sua conta na plataforma</p>
        </div>
        <div class="item-step">
          <img src="../../assets/search-step.png" alt="Create account image" />
          <span>Procure o Livro</span>
          <p>Procure o livro da sua preferencia</p>
        </div>
        <div class="item-step">
          <img src="../../assets/book-step.png" alt="Create account image" />
          <span>Emprestimo</span>
          <p>Realize o emprestimo do livro desejado</p>
        </div>
        <div class="item-step">
          <img src="../../assets/library-step.png" alt="Create account image" />
          <span>Vá até Biblioteca</span>
          <p>Vá para biblioteca para pegar seu livro!</p>
        </div>
      </div>
    </div>
    <div class="container-footer">
      <img src="../../assets/footer-img1.png" alt="Footer Image One" />
      <div class="box-information-footer">
        <span>
          Não perca tempo se cadastre para conseguir seus livros preferidos tudo
          de graça!
        </span>
        <p>
          Faça seu emprestimo agora mesmo, tudo na sua casa e vá retirar o o
          livro na biblioteca mais proxima da sua casa!
        </p>
        <button>Começe agora!</button>
      </div>
      <img src="../../assets/footer-img2.png" alt="Footer Image Two" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar/NavBar.vue";
import InputSearch from "@/components/InputSearch/InputSearch.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    InputSearch,
  },
};
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95vw;
  height: 400px;
}

.banner-information {
  width: 30%;
  height: 90%;
}

.banner-information span {
  font-size: 40px;
  font-weight: 500;

  margin-bottom: 10px;

  color: #2d2d76;
}

.banner-information p {
  color: #b9b9b7;

  font-size: 15px;
  font-weight: 500;

  margin-bottom: 15px;
}

.banner-image {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 90%;
}

.banner-image img {
  width: 70%;
}

.container-use {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 350px;
  width: 95vw;
}

.container-use h1 {
  color: #5fd3cb;

  margin: 10px 0px;
}

.box-steps-use {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 80%;
  height: 70%;
}

.item-step {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 90%;
  width: 15%;

  text-align: center;
}

.item-step img {
  width: 40%;
}

.item-step span {
  font-size: 15px;
  font-weight: 600;

  color: #7e8080;

  margin-top: 10px;
  margin-bottom: 5px;
}

.item-step p {
  font-size: 13px;
  font-weight: 600;

  color: #b2bec3;
}

.container-footer {
  display: flex;
  justify-content: space-between;

  height: 350px;
  width: 95vw;
}

.box-information-footer {
  width: 50%;
  height: 100%;
}

.box-information-footer span {
  font-size: 35px;
  font-weight: 500;

  margin-bottom: 10px;

  color: #2d2d76;
}

.box-information-footer p {
  color: #b9b9b7;

  font-size: 15px;
  font-weight: 500;

  margin-bottom: 15px;
}

.box-information-footer button {
  padding: 8px;

  border-radius: 10px;

  background: #fea6b5;
  color: white;

  border: none;
  outline: none;

  cursor: pointer;
}
</style>
