import { SET_USER, SET_TOKEN } from "./mutations-types";
import { api } from "@/services/api";
import {
  setLocalToken,
  deleteLocalToken,
  setLocalUser,
  deleteLocalUser,
  getLocalToken,
  getLocalUser,
} from "./storage";

export const ActionSetUser = ({ commit }, payload) => {
  commit(SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  commit(SET_TOKEN, payload);
};

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = getLocalToken();

  if (!token) {
    return Promise.reject(new Error("Usuario não logado!"));
  }

  dispatch("ActionSetToken", token);
};

// eslint-disable-next-line no-unused-vars
export const ActionCheckUser = ({ dispatch, state }) => {
  const user = getLocalUser();

  if (!user) {
    return Promise.reject(new Error("Usuario não logado!"));
  }

  dispatch("ActionSetUser", user);
};

export const ActionHandleLogin = ({ dispatch }, payload) => {
  return api.post("/users/auth", payload).then((res) => {
    setLocalToken(res.data.token);
    setLocalUser(res.data.user);
    dispatch("ActionSetUser", res.data.user);
    dispatch("ActionSetToken", res.data.token);
  });
};

export const ActionLogout = ({ dispatch }) => {
  deleteLocalToken();
  deleteLocalUser();
  dispatch("ActionSetUser", {});
  dispatch("ActionSetToken", "");
};
