import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatorio para prosseguir!"),
  email: yup
    .string()
    .email("Email invalido!")
    .required("O Email é obrigatorio para prosseguir!"),
  cpf: yup.string().required("CPF é obrigatorio para prosseguir!"),
  rg: yup.string().required("RG é obrigatorio para prosseguir!"),
  password: yup
    .string()
    .min(4, "A senha deve ter mais que 3 caracteres!")
    .required("Senha é obrigatorio para prosseguir!"),
});

export const librarianSchema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatorio para prosseguir!"),
  email: yup
    .string()
    .email("Email invalido!")
    .required("O Email é obrigatorio para prosseguir!"),
  cpf: yup.string().required("CPF é obrigatorio para prosseguir!"),
  rg: yup.string().required("RG é obrigatorio para prosseguir!"),
  password: yup
    .string()
    .min(4, "A senha deve ter mais que 3 caracteres!")
    .required("Senha é obrigatorio para prosseguir!"),
  identification: yup
    .string()
    .required("Numero de identifação é obrigatorio para prosseguir!"),
});
