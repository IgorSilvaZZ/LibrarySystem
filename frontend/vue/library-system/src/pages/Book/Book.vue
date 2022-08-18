<template>
  <div>
    <NavBar :isSearch="true" />

    <div class="container-info">
      <div class="section-info-book">
        <div class="image-book">
          <img src="../../assets/book-item.png" />
        </div>
        <div class="info-book">
          <span class="title-book">Harry Potter e o Calice e Fogo</span>
          <p class="author-book">J.K Rowling</p>

          <div class="description-book">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cumque, accusamus architecto cum optio dicta ad! Optio quod
              repellat dolorum facere ipsam, sit numquam amet laborum accusamus
              debitis obcaecati? Dolor!
            </p>
          </div>

          <div class="footer-info">
            <div class="item-info">
              <span>Números de Paginas</span>
              <p>386</p>
            </div>
            <div class="item-info">
              <span>Linguagem</span>
              <p>Português</p>
            </div>
          </div>

          <div
            class="container-buttons-info"
            style="width: 100%; justify-content: flex-start"
          >
            <button style="width: 40%">Realizar Emprestimo</button>
          </div>
        </div>
      </div>

      <div class="box-books"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar/NavBar.vue";
export default {
  name: "BookPage",
  data() {
    return {
      book: new Object(),
    };
  },
  components: { NavBar },
};
</script>

<style scoped>
* ::-webkit-scrollbar {
  width: 10px;
  background: white;
}
* ::-webkit-scrollbar-thumb {
  background: #fea6b5;
  border-radius: 5px;
}

.container-info {
  display: flex;
  flex-direction: column;

  width: 95vw;
}

.section-info-book {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 400px;
}

.image-book {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 95%;
}

.image-book img {
  width: 50%;
}

.info-book {
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 80%;
}

.title-book {
  color: #fea6b5;

  font-size: 25px;
  font-weight: bold;
}

.author-book {
  color: #a3a3a1;
  font-weight: bold;
  font-size: 15px;

  margin-bottom: 12px;
}

.description-book {
  width: 90%;
  height: 40%;

  margin-bottom: 15px;

  text-overflow: ellipsis;
}

.description-book p {
  color: #a3a3a1;

  font-size: 15px;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 20%;

  margin-bottom: 15px;
}

.item-info {
  width: 30%;
  height: 100%;
}

.item-info span {
  color: #fea6b5;

  font-weight: bold;
}

.item-info p {
  color: #a3a3a1;

  font-weight: 300;
}
</style>
