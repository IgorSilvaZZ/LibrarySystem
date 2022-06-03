<template>
  <div class="body-container">
    <div class="box-container">
      <div class="box-info-container">
        <div class="box-info">
          <span>Slibrary</span>
          <p class="sub-title-login">Entrar na Conta</p>
          <input
            class="input-submit"
            type="text"
            placeholder="Email"
            v-model="email"
          />
          <input
            class="input-submit"
            type="password"
            placeholder="Senha"
            v-model="password"
          />
          <button class="button-submit" @click="handleSubmit">Entrar</button>
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
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleRegisterPage() {
      this.$router.push("/register");
    },
    handleSubmit() {
      if (this.email === "") {
        this.$toast.error("Email Invalido!");
        return;
      }

      if (this.password === "") {
        this.$toast.error("Senha Invalida!");
        return;
      }

      this.$toast.success("Usuario Logado!");

      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style scoped>
@import "../../styles/global.css";

@import "./style.css";
</style>
