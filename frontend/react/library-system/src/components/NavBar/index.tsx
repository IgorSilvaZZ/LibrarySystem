import { InputSearch } from "../InputSearch";

import {
  Container,
  BoxLogo,
  LogoText,
  ImageNavBar,
  OptionsSection,
  TextOption,
  SectionIcons,
  IconOption,
} from "./style";

import logo from "../../assets/book-logo.png";
import userIcon from "../../assets/user.png";
import logoutIcon from "../../assets/logout.png";

interface INavBar {
  isSearch: boolean;
}

const NavBar = ({ isSearch }: INavBar) => {
  return (
    <Container
      style={{ borderBottom: isSearch ? "1px solid #b9b9b7" : "none" }}
    >
      <BoxLogo width={isSearch ? "40%" : "30%"}>
        <ImageNavBar src={logo} />
        <LogoText>Slibrary</LogoText>
      </BoxLogo>
      {isSearch ? (
        <InputSearch widhtContainer='50%' />
      ) : (
        <OptionsSection>
          <TextOption>Inicio</TextOption>
          <TextOption>Explorar</TextOption>
          <TextOption>Meu Perfil</TextOption>
        </OptionsSection>
      )}
      <SectionIcons>
        <IconOption src={userIcon} />
        <IconOption src={logoutIcon} />
      </SectionIcons>
    </Container>
  );
};

export { NavBar };
