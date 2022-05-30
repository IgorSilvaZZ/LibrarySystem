import styled from "styled-components";

export const ContainerExplore = styled.div`
  display: flex;
  align-items: flex-start;

  width: 95vw;

  margin: 40px 0;
`;

export const TitleContainer = styled.p`
  color: #fea6b5;

  font-size: 25px;
  font-weight: bold;

  margin-right: 10px;
  margin-bottom: 5px;
`;

export const FilterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 20%;
`;

export const SectionFilterMenu = styled.div`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 90%;

  margin: 0 10px 30px 10px;
`;

export const FilterItem = styled.p`
  font-size: 13px;
  font-weight: 500;

  color: #a3a3a1;

  cursor: pointer;

  padding: 5px;

  transition: color 0.3s;

  &:hover {
    color: #fea6b5;
  }
`;

export const ContainerBooks = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 900px;
`;

export const HeaderBooks = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
`;

export const BooksStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0%;

  height: 90%;
  width: 95%;

  margin: 0px 10px;
`;

export const BoxItemBook = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.widthBox};
  height: ${(props) => props.heightBox};

  border-radius: 10px;
  border: ${(props) => (props.isBorder ? "2px solid #ecf0f1" : "none")};

  margin: ${(props) => props.marginBox};

  box-shadow: 10px 5px 5px #bdc3c7;
`;

export const BookImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;

  background: #ecf0f1;

  img {
    width: ${(props) => props.widthImage};

    cursor: pointer;

    transition: width 0.3s;

    &:hover {
      width: ${(props) => props.widthImageHover};
    }
  }
`;

export const DescriptionBookBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #f8a5c2;
  border-radius: 0px 0px 10px 10px;

  width: 100%;
  height: 20%;
`;

export const TitleBook = styled.p`
  color: white;

  font-size: 17px;
  font-weight: 600;

  margin-bottom: 2px;
`;

export const AuthorBook = styled(TitleBook)`
  color: #a3a3a1;

  font-size: 13px;
`;

export const HandlePagesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 auto;

  width: 60%;
  height: 70px;

  p {
    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    color: #a3a3a1;

    &:hover {
      color: #fea6b5;
    }
  }
`;

export const NewBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: 95vw;

  background: #f5f6fa;

  span {
    font-size: 15px;
    font-weight: 700;

    color: #a3a3a1;
  }
`;

export const NewBooksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 90%;
  width: 90%;
`;
