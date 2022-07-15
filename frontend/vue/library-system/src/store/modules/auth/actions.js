import { SET_USER, SET_TOKEN } from "./mutations-types";
import { api } from "@/services/api";

export const ActionSetUser = ({ commit }, payload) => {
  commit(SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  commit(SET_TOKEN, payload);
};

export const ActionHandleLogin = ({ dispatch }, payload) => {
  return api.post("/users/auth", payload).then((res) => {
    dispatch("ActionSetUser", res.data.user);
    dispatch("ActionSetToken", res.data.token);
  });
};

export const ActionLogout = ({ dispatch }) => {
  dispatch("ActionSetUser", {});
  dispatch("ActionSetToken", "");
};
