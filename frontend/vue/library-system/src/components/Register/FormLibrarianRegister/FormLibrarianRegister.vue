<template>
  <div class="box-info" style="height: 90%; width: 95%">
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
    <div class="input-container">
      <input class="input-submit" type="text" placeholder="Identificação" />
      <input class="input-submit" v-model="rg" type="text" placeholder="RG" />
    </div>
    <select class="input-submit">
      <option
        v-for="library in libraries"
        :key="library.id"
        :value="library.id"
      >
        {{ library.name }}
      </option>
    </select>
    <input class="input-submit" v-model="cpf" type="text" placeholder="CPF" />
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
import { api } from "@/services/api";
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  name: "FormLibrarianRegisterComponent",
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
      libraries: [],
    };
  },
  mounted() {
    api
      .get("/libraries/")
      .then(({ data }) => {
        this.libraries = data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        this.$toast.error("Erro ao carregar as bibliotecas!");
      });
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

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 60%;
}

.input-container input {
  width: 45%;
}
</style>
