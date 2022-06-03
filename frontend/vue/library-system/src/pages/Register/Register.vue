<template>
  <div>
    <div class="body-container">
      <div class="box-container" style="height: 90%">
        <div class="box-info-container">
          <div class="box-info" style="height: 90%">
            <span style="fontsize: 25px">Crie sua conta</span>
            <input
              class="input-submit"
              type="text"
              placeholder="Nome Completo"
            />
            <input class="input-submit" type="text" placeholder="Email" />
            <input class="input-submit" type="text" placeholder="CPF" />
            <input class="input-submit" type="text" placeholder="RG" />
            <input class="input-submit" type="password" placeholder="Senha" />
            <button class="button-submit">Enviar</button>
          </div>
        </div>
        <div class="box-banner">
          <img src="../../assets/footer-img2.png" alt="Register Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped>
@import "../../styles/global.css";
@import "../Login/style.css";
</style>
