<template>
  <div class="body-container">
    <div class="box-container">
      <div class="box-info-container">
        <div class="box-info">
          <span>Slibrary</span>
          <p class="sub-title-login">Entrar na Conta</p>
          <input class="input-submit" type="text" placeholder="Email" />
          <input class="input-submit" type="text" placeholder="Senha" />
          <p class="sing-in-text" @click="handleRegisterPage">
            Não tem conta? Registre-se
          </p>
        </div>
      </div>
      <div class="box-banner">
        <img src="../../assets/login-img.png" alt="Login Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {
    handleRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import "../../styles/global.css";

@import "./style.css";
</style>
