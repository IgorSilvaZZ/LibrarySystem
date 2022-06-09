import { SET_TOKEN, SET_USER } from "./mutations-types";

export default {
  [SET_USER](state, payload) {
    state.user = payload;
  },
  [SET_TOKEN](state, payload) {
    state.token = payload;
  },
};
