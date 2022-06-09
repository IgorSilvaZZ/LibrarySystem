import Vue from "vue";
import Toast from "vue-toastification";

import router from "./routes";
import { store } from "./store";
import App from "./App.vue";

import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.use(Toast, {});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
