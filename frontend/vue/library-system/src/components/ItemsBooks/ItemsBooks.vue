<template>
  <div>
    <section class="books-styled">
      <BoxItemBook
        widthBox="300px"
        heightBox="300px"
        marginBox="10px 10px 5px 10px"
        widthImage="50%"
        :isBorder="true"
        v-for="book in books"
        :key="book.id"
      >
        <p slot="titleBook" class="title-book" @click="openModal(book)">
          {{ book.title }}
        </p>
        <p slot="authorBook" class="title-book author-book">
          {{ book.author.name }}
        </p>
      </BoxItemBook>
    </section>
  </div>
</template>

<script>
import BoxItemBook from "@/components/BoxItemBook/BoxItemBook.vue";

export default {
  name: "ItemsBooksComponent",
  components: {
    BoxItemBook,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openModal(book) {
      this.$emit("openModal", book);
    },
  },
};
</script>

<style scoped>
.books-styled {
  display: flex;
  flex-wrap: wrap;
  row-gap: 0%;

  height: 90%;
  width: 95%;

  margin: 0px 10px;
}

.title-book {
  color: white;

  font-size: 17px;
  font-weight: 600;

  margin-bottom: 2px;

  cursor: pointer;
}

.author-book {
  color: #a3a3a1;

  font-size: 13px;
}
</style>
