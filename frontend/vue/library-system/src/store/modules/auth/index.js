import { ActionSetToken, ActionSetUser, ActionHandleLogin } from "./actions";
import state from "./state";
import mutations from "./mutations";

export default {
  state,
  actions: {
    ActionSetUser,
    ActionSetToken,
    ActionHandleLogin,
  },
  mutations,
  namespaced: true,
};
