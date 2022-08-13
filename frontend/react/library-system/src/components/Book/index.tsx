import {
  AuthorBook,
  BoxBook,
  DescriptionSection,
  ImageSection,
  ImageStyled,
  TitleBook,
} from "./style";

import bookImg from "../../assets/book-item.png";

interface IBook {
  isLoan: boolean;
}

export const Book = ({ isLoan }: IBook) => {
  return (
    <BoxBook>
      <ImageSection>
        <ImageStyled src={bookImg} />
      </ImageSection>
      <DescriptionSection>
        <TitleBook>Estamos bem</TitleBook>
        {isLoan ? (
          <AuthorBook>Igor Silva</AuthorBook>
        ) : (
          <AuthorBook>Nina LaCour</AuthorBook>
        )}
      </DescriptionSection>
    </BoxBook>
  );
};
