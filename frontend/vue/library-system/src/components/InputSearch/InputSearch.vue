<template>
  <div
    class="input-container"
    :style="[
      {
        justifyContent: justifyContainer,
        alignItems,
        width: widthContainer,
        height: heightContainer,
        background: backgroundContainer,
        border:
          backgroundContainer !== 'transparent' ? 'none' : '1px solid #b9b9b7',
      },
    ]"
  >
    <img src="../../assets/searchIcon.png" :style="[{ width: widthImage }]" />

    <input
      type="text"
      :placeholder="placeHolder"
      :style="[{ color: colorInput }]"
      class="input-styled"
    />
  </div>
</template>

<script>
export default {
  name: "InputSearchComponent",
  props: {
    justifyContainer: {
      type: String,
      required: true,
    },
    alignItems: {
      type: String,
      required: true,
    },
    widthContainer: {
      type: String,
      required: true,
    },
    heightContainer: {
      type: String,
      required: true,
    },
    backgroundContainer: {
      type: String,
      required: true,
    },
    widthImage: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      default: "",
    },
    colorInput: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;

  padding: 10px;

  border-radius: 10px;
}

.input-styled {
  padding: 10px;

  width: 100%;

  border: none;
  outline: none;

  background: transparent;
}
</style>
