<template>
  <div class="body-container">
    <div class="box-container" style="height: 90%">
      <div class="box-info-container">
        <div class="box-choose-register" v-show="type === 'initial'">
          <div class="hedear-choose-register">
            <ArrowLeftIcon size="25" class="icon-back" @click="backToLogin" />
            <span class="title-box-choose">Escolha um tipo de conta</span>
          </div>

          <div class="items-register-choose">
            <div
              class="item-choose-register"
              style="background: #f9b5ac"
              @click="chooseType('reader')"
            >
              <img
                src="../../assets/open-book.png"
                alt="Item Reader Choose Register "
              />
              <span>Leitor</span>
            </div>
            <div
              class="item-choose-register"
              style="background: #ffb8d1"
              @click="chooseType('librarian')"
            >
              <img
                src="../../assets/librarian.png"
                alt="Item Librarian Choose Register"
              />
              <span>Bibliotecário</span>
            </div>
          </div>
        </div>

        <FormReaderRegister
          v-show="type === 'reader'"
          @chooseType="chooseType"
        />
        <FormLibrarianRegister
          v-show="type === 'librarian'"
          @chooseType="chooseType"
        />
      </div>
      <div class="box-banner">
        <img src="../../assets/footer-img2.png" alt="Register Image" />
      </div>
    </div>
  </div>
</template>

<script>
import FormReaderRegister from "@/components/Register/FormReaderRegister/FormReaderRegister.vue";
import FormLibrarianRegister from "@/components/Register/FormLibrarianRegister/FormLibrarianRegister.vue";
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  name: "RegisterPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FormReaderRegister,
    FormLibrarianRegister,
    ArrowLeftIcon,
  },
  data() {
    return {
      type: "initial",
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    chooseType(typeRegister) {
      this.type = typeRegister;
    },
    backToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.box-choose-register {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  height: 100%;
  width: 100%;
}

.hedear-choose-register {
  display: flex;
  flex-direction: column;

  padding: 0 50px;

  font-size: 30px;
  font-weight: 600;

  color: #fea6b5;
}

.items-register-choose {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60%;
  width: 100%;
}

.item-choose-register {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 40%;
  height: 60%;

  margin: 10px;

  border-radius: 20px;

  color: white;
  font-size: 25px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.3s;
}

.item-choose-register:hover {
  width: 45%;
  height: 65%;
}

.item-choose-register img {
  width: 30%;
}

@import "../../styles/global.css";

@import "../../pages/Login/style.css";
</style>
