<template>
  <div class="body-container">
    <div class="box-container">
      <div class="box-info-container">
        <div class="box-info">
          <ArrowLeftIcon size="25" class="icon-back" @click="backToHome" />
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
import { mapActions } from "vuex";
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  name: "LoginPage",
  components: {
    ArrowLeftIcon,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["ActionHandleLogin"]),
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

      const data = {
        email: this.email,
        password: this.password,
      };

      this.ActionHandleLogin(data)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          this.$toast.success("Login feito com sucesso!");

          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response) {
            this.$toast.error(error.response.data.error);
          } else {
            this.$toast.error("Erro ao realizar login, tente novamente!");
          }
        });
    },
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import "../../styles/global.css";

@import "./style.css";
</style>
