import {
  ActionSetToken,
  ActionSetUser,
  ActionHandleLogin,
  ActionCheckToken,
  ActionCheckUser,
  ActionLogout,
} from "./actions";
import state from "./state";
import mutations from "./mutations";
import { hasToken, hasUser } from "./getters";

export default {
  state,
  actions: {
    ActionSetUser,
    ActionSetToken,
    ActionHandleLogin,
    ActionCheckToken,
    ActionCheckUser,
    ActionLogout,
  },
  getters: {
    hasToken,
    hasUser,
  },
  mutations,
  namespaced: true,
};
