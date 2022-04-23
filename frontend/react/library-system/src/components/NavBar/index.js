import { useNavigate } from "react-router-dom";

import { NavBarContainer, LogoBook, OptionsMenu } from "./style";

import logoBook from "../../assets/book-logo.png";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <LogoBook>
        <img src={logoBook} />
        <span>Slibrary</span>
      </LogoBook>
      <OptionsMenu>
        <p onClick={() => navigate("/")}>Inicio</p>
        <p>Sobre</p>
        <p>Explorar</p>
        <p>Meus livros</p>
        <p onClick={() => navigate("/login")}>Meu Perfil</p>
      </OptionsMenu>
    </NavBarContainer>
  );
};
