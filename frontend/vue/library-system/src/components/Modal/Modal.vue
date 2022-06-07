<template>
  <div v-show="isOpen" class="bg-modal">
    <div class="modal">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    isOpen: Boolean,
  },
};
</script>

<style scoped>
.bg-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  /* background: rgba(0, 0, 0, 0.75); */

  position: fixed;

  z-index: 2;
  transition: 350ms;
}

.modal {
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 70%;

  background: white;

  /* margin: 60px auto 0 auto; */

  border-radius: 10px;

  border: 2px solid #fea6b5;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 5px 10px;
}

.header span {
  font-size: 35px;
  color: #fea6b5;

  cursor: pointer;
}

.header span:hover {
  color: #e84393;

  transition: 350ms;
}

.body {
  display: flex;

  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;
}
</style>
