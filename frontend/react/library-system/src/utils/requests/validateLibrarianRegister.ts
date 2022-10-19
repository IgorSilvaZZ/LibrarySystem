import * as yup from "yup";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

import { LibrarianForm } from "../../components/Register/LibrarianForm";
import { librarianSchema } from "./userSchemas";
import { api } from "../../services/api";

export const validateLibrarian = async (
  librarianData: LibrarianForm,
  navigate: NavigateFunction
) => {
  librarianSchema
    .validate(librarianData, { abortEarly: false })
    .then(async (_) => {
      const librarianRegister = {
        ...librarianData,
        isAdmin: true,
      };

      try {
        await api.post("/users", librarianRegister);

        toast.success("Usuario cadastrado com sucesso!");

        navigate("/login");
      } catch (error) {
        toast.error("Erro ao cadastrar!");
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
