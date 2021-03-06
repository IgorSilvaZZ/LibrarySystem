import { NavBar } from "../../components/NavBar";

import { Footer } from "../../components/Footer";

import {
  ContainerExplore,
  TitleContainer,
  FilterMenuContainer,
  SectionFilterMenu,
  FilterItem,
  ContainerBooks,
  HeaderBooks,
  BooksStyled,
  BoxItemBook,
  BookImageBox,
  DescriptionBookBox,
  TitleBook,
  AuthorBook,
  HandlePagesBox,
  NewBookContainer,
  NewBooksBox,
} from "./style";

import bookItem from "../../assets/book-item.png";

const Explore = () => {
  return (
    <>
      <NavBar isNavSearch={true} />
      <ContainerExplore>
        <FilterMenuContainer>
          <TitleContainer>Categorias</TitleContainer>
          <SectionFilterMenu>
            <FilterItem>Todos Generos</FilterItem>
            <FilterItem>Aventura</FilterItem>
            <FilterItem>Ficção</FilterItem>
            <FilterItem>Ciencia</FilterItem>
            <FilterItem>Infantil Juvenil</FilterItem>
            <FilterItem>Misterio e Suspense</FilterItem>
            <FilterItem>Romance</FilterItem>
            <FilterItem>Artes e Fotográfia</FilterItem>
            <FilterItem>Historia</FilterItem>
            <FilterItem>Biografias</FilterItem>
          </SectionFilterMenu>
          <TitleContainer>Disponibilidade</TitleContainer>
          <SectionFilterMenu>
            <FilterItem>Disponivel</FilterItem>
            <FilterItem>Indisponivel</FilterItem>
          </SectionFilterMenu>
        </FilterMenuContainer>
        <ContainerBooks>
          <HeaderBooks>
            <TitleContainer>Filtrar por</TitleContainer>
            <p
              style={{ color: "#a3a3a1", fontWeight: "bold", fontSize: "25px" }}
            >
              Mais Recentes
            </p>
          </HeaderBooks>
          <BooksStyled>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
            <BoxItemBook
              widthBox={"300px"}
              heightBox={"300px"}
              marginBox={"10px 10px 5px 10px"}
              isBorder
            >
              <BookImageBox widthImage={"50%"} widthImageHover={"55%"}>
                <img src={bookItem} />
              </BookImageBox>
              <DescriptionBookBox>
                <TitleBook>Titulo Livro</TitleBook>
                <AuthorBook>Autor Livro</AuthorBook>
              </DescriptionBookBox>
            </BoxItemBook>
          </BooksStyled>
          <HandlePagesBox>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Proximo</p>
          </HandlePagesBox>
        </ContainerBooks>
      </ContainerExplore>
      <NewBookContainer>
        <TitleContainer>Novos Livros</TitleContainer>
        <span>Veja nossas novidades!</span>
        <NewBooksBox>
          <BoxItemBook widthBox={"200px"} heightBox={"200px"}>
            <BookImageBox widthImage={"40%"} widthImageHover={"50%"}>
              <img src={bookItem} />
            </BookImageBox>
            <DescriptionBookBox>
              <TitleBook>Titulo Livro</TitleBook>
              <AuthorBook>Autor Livro</AuthorBook>
            </DescriptionBookBox>
          </BoxItemBook>
          <BoxItemBook widthBox={"200px"} heightBox={"200px"} r>
            <BookImageBox widthImage={"40%"} widthImageHover={"50%"}>
              <img src={bookItem} />
            </BookImageBox>
            <DescriptionBookBox>
              <TitleBook>Titulo Livro</TitleBook>
              <AuthorBook>Autor Livro</AuthorBook>
            </DescriptionBookBox>
          </BoxItemBook>
          <BoxItemBook widthBox={"200px"} heightBox={"200px"} r>
            <BookImageBox widthImage={"40%"} widthImageHover={"50%"}>
              <img src={bookItem} />
            </BookImageBox>
            <DescriptionBookBox>
              <TitleBook>Titulo Livro</TitleBook>
              <AuthorBook>Autor Livro</AuthorBook>
            </DescriptionBookBox>
          </BoxItemBook>
        </NewBooksBox>
      </NewBookContainer>
      <Footer />
    </>
  );
};

export default Explore;
