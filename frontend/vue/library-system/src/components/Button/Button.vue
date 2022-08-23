<template>
  <button
    :style="[
      {
        width: `${width}%`,
        background,
        color,
        borderRadius: `${borderRadius}px`,
      },
    ]"
    @click="handleClick"
  >
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    width: {
      type: Number,
      default: 40,
    },
    background: {
      type: String,
      default: "#e84393",
    },
    color: {
      type: String,
      default: "white",
    },
    borderRadius: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  width: 40%;

  padding: 10px;

  font-weight: 700;

  border: none;
  outline: none;

  cursor: pointer;
}
</style>
