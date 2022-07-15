import {
  ActionSetToken,
  ActionSetUser,
  ActionHandleLogin,
  ActionLogout,
} from "./actions";
import state from "./state";
import mutations from "./mutations";
import { hasToken, hasUser, getUser, getToken } from "./getters";

export default {
  state,
  actions: {
    ActionSetUser,
    ActionSetToken,
    ActionHandleLogin,
    ActionLogout,
  },
  getters: {
    hasToken,
    hasUser,
    getUser,
    getToken,
  },
  mutations,
  namespaced: true,
};
