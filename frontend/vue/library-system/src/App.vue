<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("auth", ["ActionCheckToken", "ActionCheckUser"]),
  },
  async mounted() {
    try {
      await this.ActionCheckToken();
      await this.ActionCheckUser();
    } catch (error) {
      this.$router.push("/");
    }
  },
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
