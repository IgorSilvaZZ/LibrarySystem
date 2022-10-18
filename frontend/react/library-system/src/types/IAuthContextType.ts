import { IRequestAuth, IUser } from "../contexts/AuthContext";
import { IBook } from "../pages/Explore";

export interface IAuthContextType {
  signed: boolean;
  user: IUser | any;
  bag: IBook[];
  handleLogin: (formData: IRequestAuth) => void;
  handleLogout: () => void;
  handleBag: (book: IBook) => void;
  clearBag: () => void;
  deleteBookBag: (bookId: string) => void;
}
