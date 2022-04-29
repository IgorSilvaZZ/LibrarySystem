import { useNavigate } from "react-router-dom";

import { InputSearch } from "../InputSearch";

import {
  NavBarContainer,
  LogoBook,
  OptionsMenu,
  ContainerIcons,
} from "./style";

import logoBook from "../../assets/book-logo.png";
import userIcon from "../../assets/user.png";

export const NavBar = ({ isNavSearch }) => {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <LogoBook>
        <img src={logoBook} />
        <span>Slibrary</span>
      </LogoBook>
      {isNavSearch ? (
        <>
          <InputSearch
            colorInput={"#b9b9b7"}
            widthContainer={"50%"}
            heightContainer={"50%"}
            backgroundContainer={"transparent"}
            widthImage={"3%"}
            justifyContainer='flex-start'
            alignItems='center'
            placeHolder='Pesquise um livro'
          />
          <ContainerIcons>
            <img src={userIcon} />
            <img src={userIcon} />
          </ContainerIcons>
        </>
      ) : (
        <OptionsMenu>
          <p onClick={() => navigate("/")}>Inicio</p>
          <p>Sobre</p>
          <p onClick={() => navigate("/explore")}>Explorar</p>
          <p>Meus livros</p>
          <p onClick={() => navigate("/login")}>Meu Perfil</p>
        </OptionsMenu>
      )}
    </NavBarContainer>
  );
};
