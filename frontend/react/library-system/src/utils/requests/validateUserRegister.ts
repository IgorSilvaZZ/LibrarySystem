import { NavigateFunction, NavigateOptions } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { UserFormData } from "../../components/Register/UserForm";
import { api } from "../../services/api";
import { userSchema } from "./userSchemas";

export const validateUser = async (
  userData: UserFormData,
  navigate: NavigateFunction
) => {
  userSchema
    .validate(userData, { abortEarly: false })
    .then(async (_) => {
      const userRegister = {
        ...userData,
        isAdmin: false,
      };

      try {
        await api.post("/users", userRegister);

        toast.success("Usuario cadastrado com sucesso!");

        navigate("/login");
      } catch (error) {
        toast.error("Erro ao cadastra usuario!");
      }
    })
    .catch((error) => {
      if (error instanceof yup.ValidationError) {
        error.inner.map(({ message }) => {
          return toast.error(message);
        });
      }
    });
};
