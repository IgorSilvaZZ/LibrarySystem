import Vue from "vue";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist";

import modules from "./modules";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: "vuex",
  reducer: (state) => ({
    auth: state.auth,
  }),
  storage: window.localStorage,
});

export const store = new Vuex.Store({ modules, plugins: [vuexLocal.plugin] });
