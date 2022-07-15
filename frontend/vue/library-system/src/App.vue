<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
input,
textarea,
button {
  font: 400 16px "Poppins", sans-serif;
}
</style>
