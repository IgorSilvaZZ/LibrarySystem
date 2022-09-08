import { IBook } from "../pages/Explore";

export interface IAuthContextType {
  signed: boolean;
  bag: IBook[];
  handleBag: (book: IBook) => void;
  clearBag: () => void;
  deleteBookBag: (bookId: string) => void;
}
