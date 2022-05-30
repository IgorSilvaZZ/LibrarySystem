<template>
  <div class="body-container">
    <div class="box-container">
      <div class="box-info-container">
        <div class="box-info">
          <span>Slibrary</span>
          <p class="sub-title-login">Entrar na Conta</p>
          <input class="input-submit" type="text" placeholder="Email" />
          <input class="input-submit" type="text" placeholder="Senha" />
          <p class="sing-in-text">Não tem conta? Registre-se</p>
        </div>
      </div>
      <div class="box-banner">
        <img src="../../assets/login-img.png" alt="Login Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
@import "../../styles/global.css";

.body-container {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background: #f9e9e8;
}

.box-info {
  display: flex;
  flex-direction: column;

  height: 80%;
  width: 80%;
}

.box-info span {
  font-size: 30px;
  font-weight: 600;

  color: #fea6b5;
}

.box-banner {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 100%;

  border-radius: 0px 20px 20px 0px;

  background: #ffa5b5;
}

.box-banner img {
  width: 90%;

  cursor: pointer;

  transition: all 0.3s;
}

.box-banner img:hover {
  width: 95%;
}

.sub-title-login {
  font-size: 25px;
  font-weight: 600;

  color: #5d646e;

  margin-bottom: 40px;
}

.sing-in-text {
  font-size: 12px;
  font-weight: 500;

  color: #fea6b5;

  margin-top: 20px;

  transition: color 0.3s;

  cursor: pointer;
}

.sing-in-text:hover {
  color: #e84393;
}
</style>
