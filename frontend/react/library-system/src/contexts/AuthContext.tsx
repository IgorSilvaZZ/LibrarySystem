import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

import { IAuthContextType } from "../types/IAuthContextType";
import { IBook } from "../pages/Explore";
export interface IAuthProvider {
  children: JSX.Element | JSX.Element[];
}

export interface IRequestAuth {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  avatar: string;
  identification: string;
  isAdmin: boolean;
  isAvailable: boolean;
}

export const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  // Bag with books for user!
  const [bag, setBag] = useState<IBook[]>([]);

  //Iniital user for authentication
  const [user, setUser] = useState<IUser | null>();

  //Iniital function for loadStorage user, and more informations in localStorage
  function loadStorage() {
    const userInStorage = localStorage.getItem("user");

    const bagInStorage = localStorage.getItem("bag");

    if (userInStorage) {
      const userStorage = JSON.parse(userInStorage);

      localStorage.setItem("user", JSON.stringify(userStorage));

      setUser(userStorage);
    }

    // Data for bag not independent user for exists!
    if (bagInStorage) {
      const bagStorage = JSON.parse(bagInStorage);

      localStorage.setItem("bag", JSON.stringify(bagStorage));

      setBag(bagStorage);
    } else {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  }

  async function handleLogin(formData: IRequestAuth) {
    try {
      const { data } = await api.post("/users/auth", formData);

      setUser(data);

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      toast.error("E-mail ou Senha incorretos!");
    }
  }

  function handleLogout() {
    setUser(null);
    setBag([]);
    localStorage.clear();
    navigate("/login");
  }

  function handleBag(book: IBook) {
    const bookExists = bag.find((bookBag) => bookBag.id === book.id);

    if (bookExists) {
      toast.info("Livro já adicionado na bolsa!");
      return;
    }

    const updateBag = [...bag, book];

    localStorage.setItem("bag", JSON.stringify(updateBag));

    setBag(updateBag);

    toast.info("Livro adicionado na bolsa!");
  }

  function deleteBookBag(bookId: string) {
    const findIndex = bag.findIndex((book) => book.id === bookId);

    bag.splice(findIndex, 1);

    setBag([...bag]);

    localStorage.setItem("bag", JSON.stringify(bag));
  }

  function clearBag() {
    setBag([]);

    localStorage.setItem("bag", JSON.stringify([]));

    toast.info("Bolsa esvaziada!");
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        handleLogin,
        handleLogout,
        bag,
        handleBag,
        deleteBookBag,
        clearBag,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
