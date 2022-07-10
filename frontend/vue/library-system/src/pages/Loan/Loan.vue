<template>
  <div>
    <NavBar :isSearch="true" />

    <div class="container-loan">
      <div class="menu-options">
        <ArrowLeftIcon size="50" class="icon-back" @click="goToBack" />
      </div>
      <div class="box-loan">
        <p class="title-container">Faça seu emprestimo!</p>
        <div class="section-loan">
          <!--  <img
            src="../../assets/book-item.png"
            alt="Library Image"
            class="book-image"
          /> -->
          <div class="section-loan-infos">
            <div class="box-info" style="height: 100%; width: 100%">
              <div class="input-container">
                <span>Nome:</span>
                <p class="input-submit" style="width: 90%">{{ book.title }}</p>
              </div>
              <div class="input-container">
                <span>Autor:</span>
                <p class="input-submit" style="width: 90%">
                  {{ book.author.name }}
                </p>
              </div>
              <div class="input-container">
                <span>Numero de Paginas:</span>
                <p class="input-submit" style="width: 90%">
                  {{ book.numberPages }}
                </p>
              </div>
              <div class="input-container">
                <span>Lingua:</span>
                <p class="input-submit" style="width: 90%">
                  {{ book.language }}
                </p>
              </div>
            </div>
          </div>
          <div class="section-loan-infos">
            <div class="box-info" style="height: 100%; width: 100%">
              <div class="input-container">
                <span>Categoria:</span>
                <p class="input-submit" style="width: 90%">
                  {{ book.category.name }}
                </p>
              </div>
              <div class="input-container">
                <span>Data de Emprestimo:</span>
                <input
                  type="date"
                  @change="setValueLoan"
                  v-model="dateLoan"
                  ref="refDateLoan"
                  class="input-submit"
                  style="width: 90%"
                />
              </div>
              <div class="input-container">
                <span>Data de Devolução:</span>
                <input
                  type="date"
                  ref="refDateDevolution"
                  v-model="dateDevolution"
                  class="input-submit"
                  style="width: 90%"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container-submit">
          <div class="container-buttons-info" style="width: 75%">
            <button style="width: 50%" @click="createLoan">
              Realizar Emprestimo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import { ArrowLeftIcon } from "vue-feather-icons";

import { api } from "@/services/api";

import NavBar from "@/components/Navbar/NavBar.vue";

export default {
  name: "LoanPage",
  components: {
    NavBar,
    ArrowLeftIcon,
  },
  data() {
    return {
      book: {
        id: "",
        title: "",
        description: "",
        numberPages: 0,
        language: "",
        code: "",
        quantity: 0,
        author: {
          name: "",
        },
        category: {
          name: "",
        },
      },
      dateLoan: "",
      dateDevolution: "",
    };
  },
  computed: mapState("auth", {
    token: (state) => state.token,
  }),
  async mounted() {
    if (!this.$route.params.id) {
      this.$router.push("/explore");
    } else {
      const { data } = await api.get(`/books/${this.$route.params.id}`);

      this.book = data;
    }
  },
  methods: {
    goToBack() {
      this.$router.push("/explore");
    },
    setValueLoan(event) {
      const date = moment(event.target.value);

      const dateDevolution = date.add(15, "days").format("YYYY-MM-DD");

      this.dateDevolution = dateDevolution;
    },
    async createLoan() {
      if (this.dateDevolution == "") {
        this.$toast.error("Preencha a data de emprestimo!");
        return;
      }

      try {
        await api.post(
          "/loans",
          {
            book_id: this.book.id,
            expected_return_date: this.dateDevolution,
          },
          {
            headers: {
              authorization: `Bearer ${this.token}`,
            },
          }
        );

        this.$toast.success("Emprestimo realizado com sucesso!");

        setTimeout(() => {
          this.$router.push("/explore");
        }, 2000);
      } catch (err) {
        console.log(err);
        this.$toast.error(err.message);
      }
    },
  },
};
</script>

<style scoped>
.container-loan {
  display: flex;
  align-items: flex-start;

  width: 95vw;

  margin: 40px 0;
}

.menu-options {
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 20%;
}

.title-container {
  color: #fea6b5;

  font-size: 22px;
  font-weight: bold;

  margin-right: 10px;
}

.box-menu-items {
  display: flex;
  flex-direction: column;

  width: 90%;

  margin: 0 10px 30px 5px;
}

.menu-item {
  font-size: 18px;
  font-weight: 500;

  color: #a3a3a1;

  cursor: pointer;

  padding: 5px;

  transition: color 0.3s;
}

.menu-item:hover {
  color: #fea6b5;
}

.box-loan {
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 80vh;
}

.section-loan {
  display: flex;
  align-items: center;

  width: 100%;
  height: 80%;
}

.subtitle-container {
  font-size: 16px;
  font-weight: 400;

  color: #a3a3a1;

  margin-bottom: 50px;
}

.book-image {
  width: 180px;

  margin-right: 20px;
}

.section-loan-infos {
  width: 40%;
  height: 100%;

  margin-right: 10px;
}

.input-container span {
  font-size: 12px;
}

.container-submit {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 40%;
}
</style>
