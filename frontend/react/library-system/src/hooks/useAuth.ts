import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IAuthContextType } from "../types/IAuthContextType";

export const useAuth = () => {
  const context = useContext(AuthContext) as IAuthContextType;

  return context;
};
