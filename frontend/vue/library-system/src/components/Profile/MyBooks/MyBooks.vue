<template>
  <div>
    <template v-if="loans.length === 0">
      <div class="not-found-books">
        <span>Nenhum emprestimo realizado!</span>
        <img src="../../../assets/books-not-found.png" />
      </div>
    </template>

    <template v-else>
      <p class="title-container">Gerencie seus emprestimos!</p>
      <div class="section-loan">
        <ItemsBooks :books="books" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LoansService from "@/services/LoansService";
import BooksServices from "@/services/BooksServices";

import ItemsBooks from "@/components/ItemsBooks/ItemsBooks.vue";

export default {
  name: "MyBooksComponent",
  components: {
    ItemsBooks,
  },
  data() {
    return {
      books: [],
      loans: [],
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

      if (data.loans.length > 0) {
        this.loans = data;

        data.loans.map(async (loan) => {
          const responseBook = await BooksServices.listById(loan.book_id);

          if (responseBook) {
            this.books.push(responseBook.data);
          }
        });
      }
    }
  },
};
</script>

<style scoped></style>
