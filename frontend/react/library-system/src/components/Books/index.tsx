import { Book } from "../Book";
import { SectionBooks } from "./style";

interface IBooks {
  isLoan: boolean;
}

export const Books = ({ isLoan }: IBooks) => {
  return (
    <SectionBooks>
      <Book isLoan={isLoan} />
    </SectionBooks>
  );
};
