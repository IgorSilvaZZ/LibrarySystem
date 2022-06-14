<template>
  <div class="box-info" style="height: 90%">
    <ArrowLeftIcon size="25" class="icon-back" @click="backToInitial" />
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
      v-mask="'###.###.###-##'"
      type="text"
      placeholder="CPF"
    />
    <input
      class="input-submit"
      v-model="rg"
      v-mask="'##.###.###-#'"
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
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";
import { api } from "@/services/api";

export default {
  name: "FormReaderRegisterComponent",
  components: {
    ArrowLeftIcon,
  },
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
        identification: null,
        isAdmin: false,
        library_id: null,
      };

      api
        .post("/users", data)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
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
    backToInitial() {
      this.$emit("chooseType", "initial");
    },
  },
};
</script>

<style scoped></style>
