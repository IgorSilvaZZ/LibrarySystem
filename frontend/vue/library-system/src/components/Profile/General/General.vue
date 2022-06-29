<template>
  <div>
    <h2 class="title-container" style="font-size: 25px">Meu perfil</h2>
    <p class="subtitle-container">Altere suas informações e troque de foto</p>
    <div class="infos-profile-container">
      <p class="subtitle-container" style="font-size: 18px; margin-bottom: 5px">
        Troque sua foto de perfil
      </p>
      <div class="section-image-profile">
        <div class="box-change-image" style="width: 55%">
          <img
            class="box-change-icon"
            src="../../../assets/user-icon-image.png"
            alt="Profile Image Change"
          />
          <div class="container-buttons-change-image">
            <button style="background: #fea6b5">Trocar de Foto</button>
            <button style="background: #e84393">Excluir Foto</button>
          </div>
        </div>
      </div>
      <p class="subtitle-container" style="font-size: 18px; margin-bottom: 5px">
        Atualize suas informações
      </p>
      <div
        class="box-info"
        style="height: 90%; width: 90%; margin-bottom: 20px"
      >
        <div class="input-container">
          <input class="input-submit" type="text" placeholder="Nome Completo" />
          <input class="input-submit" type="email" placeholder="Email" />
        </div>
        <div class="input-container">
          <input class="input-submit" type="text" placeholder="Identificação" />
          <input
            class="input-submit"
            v-mask="'##.###.###-#'"
            type="text"
            placeholder="RG"
          />
        </div>
        <div class="input-container">
          <input
            class="input-submit"
            v-mask="'###.###.###-##'"
            type="text"
            placeholder="CPF"
          />
          <input class="input-submit" type="password" placeholder="Senha" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
};
</script>

<style scoped>
.infos-profile-container {
  height: 80%;
}

.section-image-profile {
  display: flex;

  width: 100%;
  height: 200px;

  margin-bottom: 10px;
}

.box-change-image {
  display: flex;
  align-items: center;

  height: 100%;
}

.box-change-icon {
  width: 25%;
}

.container-buttons-change-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
}

.container-buttons-change-image button {
  width: 70%;

  padding: 10px;

  margin-bottom: 10px;

  font-weight: 600;
  color: white;

  border-radius: 5px;

  cursor: pointer;

  border: none;
  outline: none;
}

.input-submit {
  width: 40%;

  margin: 10px;
}
</style>
