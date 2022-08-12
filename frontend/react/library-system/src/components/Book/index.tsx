import { BoxBook, ImageSection, ImageStyled } from "./style";

import bookImg from "../../assets/book-item.png";

export const Book = () => {
  return (
    <BoxBook>
      <ImageSection>
        <ImageStyled src={bookImg} />
      </ImageSection>
    </BoxBook>
  );
};
