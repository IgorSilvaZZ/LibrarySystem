<template>
  <div
    class="box-item-book"
    :style="[
      {
        width: widthBox,
        height: heightBox,
        border: isBorder ? '2px solid #ecf0f1' : 'none',
        margin: marginBox,
      },
    ]"
  >
    <div class="box-image-box">
      <img src="../../assets/book-item.png" :style="[{ width: widthImage }]" />
    </div>
    <div class="description-book-box">
      <slot name="titleBook"></slot>
      <slot name="authorBook"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxItemBookComponent",
  props: {
    widthBox: {
      type: String,
      required: true,
    },
    heightBox: {
      type: String,
      required: true,
    },
    isBorder: {
      type: Boolean,
      default: false,
    },
    marginBox: {
      type: String,
      required: false,
    },
    widthImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.box-item-book {
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  box-shadow: 10px 5px 5px #bdc3c7;
}

.box-image-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;

  background: #ecf0f1;
}

.box-image-box img {
  cursor: pointer;

  transition: width 0.3s;
}

.description-book-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #f8a5c2;
  border-radius: 0px 0px 10px 10px;

  width: 100%;
  height: 20%;
}
</style>
