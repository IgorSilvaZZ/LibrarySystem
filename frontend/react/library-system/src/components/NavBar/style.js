import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isSearch ? "space-between" : "flex-start"};
  align-items: center;

  width: 95vw;
  height: 80px;

  border-bottom: ${(props) => (props.isSearch ? "1px solid #bdc3c7" : "none")};
`;

export const LogoBook = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => (props.isSearch ? "40%" : "20%")};
  height: 100%;

  img {
    width: 50px;
  }

  span {
    color: #a3a3a1;

    font-size: 20px;
    font-weight: 600;

    margin: 0px 10px;
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  height: 100%;

  p {
    font-weight: 500;

    color: #a3a3a1;

    cursor: pointer;

    padding: 5px;

    transition: all 0.3s;

    &:hover {
      border-radius: 5px;

      color: #fea6b5;

      background: #ffe0e4;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;

  width: 10%;
  height: 50%;

  img {
    width: 15px;

    margin: 10px;

    cursor: pointer;
  }
`;
