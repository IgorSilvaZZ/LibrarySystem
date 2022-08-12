import searchIcon from "../../assets/searchIcon.png";
import { IconInputSearch, InputSearchSection, InputStyle } from "./style";

interface IInputSearch {
  widhtContainer: string;
}

export const InputSearch = ({ widhtContainer }: IInputSearch) => {
  return (
    <InputSearchSection width={widhtContainer}>
      <IconInputSearch src={searchIcon} />
      <InputStyle placeholder='Pesquise um Livro' />
    </InputSearchSection>
  );
};
