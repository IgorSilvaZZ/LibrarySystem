import Vue from "vue";
import Toast from "vue-toastification";

import router from "./routes";
import App from "./App.vue";

import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.use(Toast, {});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
