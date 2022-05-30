<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "./pages/Login/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* body {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
} */

body,
input,
textarea,
button {
  font: 400 16px "Poppins", sans-serif;
}
</style>
