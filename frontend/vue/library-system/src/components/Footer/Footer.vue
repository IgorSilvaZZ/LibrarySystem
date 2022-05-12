<template>
  <div class="footer-container">
    <p class="footer-item">Slibary</p>
    <p class="footer-item">Endereço</p>
    <p class="footer-item">slibary@org.com.br</p>
    <p class="footer-item">Igor´s Devs</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 95vw;
  height: 50px;

  margin-top: 50px;

  background: #e2e2e2;
}

.footer-item {
  font-size: 15px;
  font-weight: 700;

  color: #a3a3a1;
}
</style>
