import classNames from "classnames";

import { InputSearch } from "../InputSearch";

import {
  LogoText,
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
    <div
      className={classNames(
        "flex justify-start items-center w-[95vw] h-[80px]",
        {
          "border-y border-gray-300": isSearch,
        }
      )}
    >
      <div
        className={classNames("flex items-center", {
          "w-[40%]": isSearch,
          "w-[30%]": !isSearch,
        })}
      >
        <img className='w-[50px] cursor-pointer' src={logo} />
        <LogoText>Slibrary</LogoText>
      </div>
      {isSearch ? (
        <InputSearch widthContainer='50%' />
      ) : (
        <div className='flex justify-evenly items-center w-[70%]'>
          <a className='font-medium text-gray-400 decoration-0 cursor-pointer p-1 hover:text-pink-400 transition-colors'>
            Inicio
          </a>
          <TextOption>Explorar</TextOption>
          <TextOption>Meu Perfil</TextOption>
        </div>
      )}
      <SectionIcons>
        <IconOption src={userIcon} />
        <IconOption src={logoutIcon} />
      </SectionIcons>
    </div>
  );
};

export { NavBar };
