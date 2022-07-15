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

import { api } from "@/services/api";

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
    const { data } = await api.get("/users/loans", {
      headers: {
        authorization: `Bearer ${this.getToken}`,
      },
    });

    if (data.loans.length > 0) {
      this.loans = data;

      data.loans.map(async (loan) => {
        const responseBook = await api.get(`/books/${loan.book_id}`);

        if (responseBook) {
          this.books.push(responseBook.data);
        }
      });
    }
  },
};
</script>

<style scoped></style>
