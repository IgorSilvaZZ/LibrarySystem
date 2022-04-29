import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95vw;
  height: 80px;
`;

export const LogoBook = styled.div`
  display: flex;
  align-items: center;

  width: 20%;
  height: 100%;

  img {
    width: 15%;
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

  width: 30%;
  height: 50%;

  img {
    width: 5%;

    margin: 10px;

    cursor: pointer;
  }
`;
