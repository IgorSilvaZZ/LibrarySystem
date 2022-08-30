<template>
  <div>
    <h2 class="title-container" style="font-size: 25px">Meu perfil</h2>
    <p class="subtitle-container">Altere suas informações!</p>
    <div class="infos-profile-container">
      <div class="section-image-profile">
        <div class="box-change-image" style="width: 55%">
          <label for="file-input" style="width: 30%">
            <img
              v-if="!user.avatar"
              class="box-change-icon"
              src="../../../assets/user-icon-image.png"
              alt="Profile Image Change"
            />
            <img
              v-else
              class="box-change-icon box-change-contain-icon"
              :src="`http://localhost:3333/images/${user.avatar}`"
              alt="Profile Image Change"
            />
          </label>
          <input type="file" id="file-input" @change="updateAvatarUser" />
          <div class="container-buttons-change-image">
            <span class="text-name-profile">Olá, {{ user.name }}</span>
            <p
              class="subtitle-container"
              style="font-size: 18px; margin-bottom: 5px"
            >
              Troque sua foto de perfil
            </p>
          </div>
        </div>
      </div>
      <p class="subtitle-container" style="font-size: 18px; margin-bottom: 5px">
        Atualize suas informações
      </p>
      <div
        class="box-info"
        style="height: 90%; width: 90%; margin-bottom: 20px"
      >
        <div class="input-container">
          <input
            class="input-submit"
            type="text"
            placeholder="Nome Completo"
            v-model="user.name"
          />
          <input
            class="input-submit"
            type="email"
            placeholder="Email"
            v-model="user.email"
          />
        </div>
        <div class="input-container">
          <input
            class="input-submit"
            v-mask="'###.###.###-##'"
            type="text"
            placeholder="CPF"
            v-model="user.cpf"
          />
          <input
            class="input-submit"
            v-mask="'##.###.###-#'"
            type="text"
            placeholder="RG"
            v-model="user.rg"
          />
        </div>
      </div>
      <div class="container-buttons-info" style="width: 75%">
        <button style="width: 50%">Atualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// eslint-disable-next-line no-unused-vars
import { api } from "@/services/api";

export default {
  name: "ProfileComponent",
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        cpf: "",
        rg: "",
        avatar: undefined,
        identification: "",
        isAdmin: false,
        isAvailable: true,
      },
    };
  },
  methods: {
    async getUserData() {
      try {
        const { data } = await api.get(`/users/${this.getUser.id}`);

        this.user = data;
      } catch (error) {
        this.$toast.error("Erro ao carregar as informações! Tente novamente");

        setTimeout(() => {
          this.$router.push("/explore");
        }, 1000);
      }
    },
    async updateAvatarUser(event) {
      const files = event.target.files;

      if (files.length > 1) {
        this.$toast.info("Nao é possivel selecionar mais que dois arquivos!");
        return;
      }

      const [file] = files;

      const bodyFormData = new FormData();

      bodyFormData.append("avatar", file);

      try {
        await api.patch("/users/avatar", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.getToken}`,
          },
        });

        this.$toast.success("Foto atualizada com sucesso!");

        await this.getUserData();
      } catch (error) {
        this.$toast.error(
          "Erro ao tentar atualizar sua foto! Tente novamente!"
        );
      }
    },
  },
  async mounted() {
    await this.getUserData();
  },
  computed: {
    ...mapGetters("auth", ["getUser", "getToken"]),
  },
};
</script>

<style scoped>
.infos-profile-container {
  height: 80%;
}

.section-image-profile {
  display: flex;

  width: 100%;
  height: 200px;

  margin-bottom: 10px;
}

.box-change-image {
  display: flex;
  align-items: center;
  gap: 30px;

  height: 100%;
}

.box-change-image > input {
  width: 0;
  height: 0;

  visibility: hidden;
}

.box-change-icon {
  width: 100%;

  opacity: 0.7;

  cursor: pointer;

  transition: opacity 0.2s;
}

.box-change-icon:hover {
  opacity: 1;
}

.box-change-contain-icon {
  height: 150px;

  object-fit: contain;

  border-radius: 50%;
}

.container-buttons-change-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  width: 50%;
}

.text-name-profile {
  width: 100%;

  color: #fea6b5;

  font-weight: 600;
  font-size: 30px;
}

.input-submit {
  width: 40%;

  margin: 10px;
}
</style>
