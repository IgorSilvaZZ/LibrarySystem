import { NavBarContainer, LogoBook, OptionsMenu } from "./style";

import logoBook from "../../assets/book-logo.png";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoBook>
        <img src={logoBook} />
        <span>Slibrary</span>
      </LogoBook>
      <OptionsMenu>
        <p>Inicio</p>
        <p>Sobre</p>
        <p>Explorar</p>
        <p>Meus livros</p>
        <p>Meu Perfil</p>
      </OptionsMenu>
    </NavBarContainer>
  );
};
