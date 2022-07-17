<template>
  <div>
    <Modal
      :isOpen="isOpenModalBook"
      style="align-items: flex-start; justify-content: flex-start"
    >
      <template slot="header">
        <span @click="isOpenModalBook = !isOpenModalBook">&times;</span>
      </template>
      <template slot="body">
        <div class="info-image">
          <img src="../../../assets/book-item.png" />
        </div>
        <div class="info-book">
          <p class="input-submit" style="width: 100%">
            {{ selectedBook.title }}
          </p>
          <div class="input-container">
            <p class="input-submit" style="width: 45%">
              {{ selectedBook.numberPages }}
            </p>
            <p class="input-submit" style="width: 45%">
              {{ selectedBook.language }}
            </p>
          </div>
          <div class="input-container">
            <p class="input-submit" style="width: 45%">
              {{ selectedBook.author.name }}
            </p>
            <p class="input-submit" style="width: 45%">
              {{ selectedBook.category.name }}
            </p>
          </div>
          <div class="input-container">
            <input
              type="date"
              disabled="true"
              :value="loanSelected.start_date"
              class="input-submit"
              style="width: 45%"
            />
            <input
              type="date"
              disabled="true"
              :value="loanSelected.expected_return_date"
              class="input-submit"
              style="width: 45%"
            />
          </div>
          <div class="container-buttons-info">
            <button
              v-if="loanSelected.end_date === null"
              :disabled="!getUser.isAdmin"
              :style="[
                {
                  width: '50%',
                  background: getUser.isAdmin ? '#e84393' : '#b9b9b7',
                },
              ]"
              @click="devolutionLoan(loanSelected.id)"
            >
              Marcar como devolvido
            </button>
            <button
              v-else
              disabled="true"
              style="width: 50%; background: #b9b9b7"
            >
              Livro devolvido!
            </button>
          </div>
        </div>
      </template>
    </Modal>

    <template v-if="loans.length === 0">
      <div class="not-found-books">
        <span>Nenhum emprestimo realizado!</span>
        <img src="../../../assets/books-not-found.png" />
      </div>
    </template>

    <template v-else>
      <p class="title-container">Gerencie seus emprestimos!</p>
      <div class="section-loan">
        <ItemsBooks
          :books="books"
          @openModal="openModalBook"
          :nameUser="true"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

import LoansService from "@/services/LoansService";
import BooksServices from "@/services/BooksServices";

import Modal from "@/components/Modal/Modal.vue";
import ItemsBooks from "@/components/ItemsBooks/ItemsBooks.vue";

export default {
  name: "MyLoansComponent",
  components: {
    ItemsBooks,
    Modal,
  },
  data() {
    return {
      isOpenModalBook: false,
      books: [],
      loans: [],
      loanSelected: {
        book_id: "",
        end_date: "",
        expected_return_date: "",
        id: "",
        start_date: "",
        user_id: "",
      },
      selectedBook: {
        id: "",
        title: "",
        description: "",
        numberPages: 0,
        language: "",
        code: "",
        quantity: 0,
        category_id: "",
        author_id: "",
        loanId: "",
        author: {
          name: "",
        },
        category: {
          name: "",
        },
        user: {
          name: "",
        },
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["getUser", "getToken"]),
  },
  async mounted() {
    const headers = {
      authorization: `Bearer ${this.getToken}`,
    };

    if (!this.getUser.isAdmin) {
      const { data } = await LoansService.listLoansByUser(headers);

      if (data.loans.length && data.loans.length > 0) {
        this.loans = data.loans.filter((loan) => loan.end_date === null);

        if (this.loans.length > 0) {
          this.loans.map(async (loan) => {
            const responseBook = await BooksServices.listById(loan.book_id);

            if (responseBook) {
              this.books.push(responseBook.data);
            }
          });
        }
      }
    } else {
      const { data } = await LoansService.list(headers);

      if (data.length > 0) {
        data.map(async (loan) => {
          const responseBook = await BooksServices.listById(loan.book_id);

          if (responseBook) {
            this.books.push({
              ...responseBook.data,
              user: loan.user,
              loanId: loan.id,
            });
          }
        });

        this.loans = data;
      }
    }
  },
  methods: {
    goToBack() {
      this.$router.push("/profile");
    },
    openModalBook(book) {
      this.isOpenModalBook = true;

      const loanFilter = this.loans.find((loan) => loan.id == book.loanId);

      this.selectedBook = book;

      loanFilter.start_date = moment(loanFilter.start_date).format(
        "YYYY-MM-DD"
      );
      loanFilter.expected_return_date = moment(
        loanFilter.expected_return_date
      ).format("YYYY-MM-DD");

      this.loanSelected = loanFilter;
    },
    async devolutionLoan(idLoan) {
      try {
        await LoansService.devolutionLoan(idLoan, {
          authorization: `Bearer ${this.getToken}`,
        });

        this.$toast.success("Devolução realizada com sucesso!");

        setTimeout(() => {
          this.$router.push("/explore");
        }, 1000);
      } catch (error) {
        this.$toast.error("Erro ao realizar a devolução!");
      }
    },
  },
};
</script>

<style scoped>
.info-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 30%;
  height: 95%;

  margin: 10px;
}

.info-image img {
  width: 50%;
}

.container-my-loans {
  display: flex;
  align-items: flex-start;

  width: 95vw;
  height: 100%;

  margin: 20px 0;
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

.box-loan {
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 80vh;
}

.section-loan {
  width: 100%;
}

.info-book {
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 95%;

  margin: 10px;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
