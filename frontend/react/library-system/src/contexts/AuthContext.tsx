import { createContext, useEffect, useState } from "react";
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
  // Bag with books for user!
  const [bag, setBag] = useState<IBook[]>([]);

  //Iniital user for authentication
  const [user, setUser] = useState<IUser>();

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

  function handleBag(book: IBook) {
    const updateBag = [...bag, book];

    localStorage.setItem("bag", JSON.stringify(updateBag));

    setBag(updateBag);
  }

  function deleteBookBag(bookId: string) {
    const currenBag = bag;

    const findIndex = currenBag.findIndex((book) => book.id === bookId);

    currenBag.splice(findIndex, 1);

    setBag(currenBag);

    localStorage.setItem("bag", JSON.stringify(currenBag));
  }

  function clearBag() {
    localStorage.setItem("bag", JSON.stringify([]));

    setBag([]);
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
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
