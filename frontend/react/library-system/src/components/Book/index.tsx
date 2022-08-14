import {
  AuthorBook,
  BoxBook,
  DescriptionSection,
  ImageSection,
  ImageStyled,
  TitleBook,
} from "./style";

import bookImg from "../../assets/book-item.png";

import { IBook } from "../../pages/Explore";

export interface IBookComponent {
  isLoan: boolean;
  book: IBook;
}

export const Book = ({ isLoan, book }: IBookComponent) => {
  return (
    <BoxBook>
      <ImageSection>
        <ImageStyled src={bookImg} />
      </ImageSection>
      <DescriptionSection>
        <TitleBook>{book.title}</TitleBook>
        {isLoan ? (
          <AuthorBook>Igor Silva</AuthorBook>
        ) : (
          <AuthorBook>Nina LaCour</AuthorBook>
        )}
      </DescriptionSection>
    </BoxBook>
  );
};
