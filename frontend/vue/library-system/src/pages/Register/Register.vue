<template>
  <div>
    <div class="body-container">
      <div class="box-container" style="height: 90%">
        <div class="box-info-container">
          <div class="box-info" style="height: 90%">
            <span style="fontsize: 25px">Crie sua conta</span>
            <input
              class="input-submit"
              type="text"
              placeholder="Nome Completo"
              v-model="name"
            />
            <input
              class="input-submit"
              v-model="email"
              type="text"
              placeholder="Email"
            />
            <input
              class="input-submit"
              v-model="cpf"
              type="text"
              placeholder="CPF"
            />
            <input
              class="input-submit"
              v-model="rg"
              type="text"
              placeholder="RG"
            />
            <input
              class="input-submit"
              v-model="password"
              type="password"
              placeholder="Senha"
            />
            <button @click="handleSubmit" class="button-submit">Enviar</button>
          </div>
        </div>
        <div class="box-banner">
          <img src="../../assets/footer-img2.png" alt="Register Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api";

export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      cpf: "",
      rg: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        rg: this.rg,
        password: this.password,
        isAdmin: false,
      };

      api
        .post("/users", data)
        .then((res) => {
          console.log(res);
          this.$toast.success("Usuario cadastrado com sucesso!");

          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        })
        .catch((error) => {
          if (error.response) {
            this.$toast.error(error.response.data.error);
          } else {
            this.$toast.error("Erro ao se cadastrar tente novamente!");
          }
        });
    },
  },
};
</script>

<style scoped>
@import "../../styles/global.css";
@import "../Login/style.css";
</style>
