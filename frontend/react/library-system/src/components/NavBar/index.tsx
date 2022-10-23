import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

import { InputSearch } from "../InputSearch";

import logo from "../../assets/book-logo.png";
import userIcon from "../../assets/user.png";
import logoutIcon from "../../assets/logout.png";
import bagIcon from "../../assets/shopping-cart.png";
import { useAuth } from "../../hooks/useAuth";

interface INavBar {
  isSearch: boolean;
  onClickBag?: () => void;
}

const NavBar = ({ isSearch, onClickBag }: INavBar) => {
  const navigate = useNavigate();

  const { signed, handleLogout } = useAuth();

  const goToPerfil = () => {
    if (signed) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

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
        <span className='text-xl font-semibold mx-2 text-gray-400'>
          Slibrary
        </span>
      </div>
      {isSearch ? (
        <>
          <InputSearch widthContainer='50%' />

          <div className='flex items-center w-[10%] h-1/2'>
            <img
              className='w-4 m-2 cursor-pointer'
              src={userIcon}
              onClick={goToPerfil}
              title='Perfil'
            />
            <img
              onClick={onClickBag}
              className='w-4 m-2 cursor-pointer'
              src={bagIcon}
              title='Bolsa'
            />
            {signed && (
              <img
                className='w-4 m-2 cursor-pointer'
                src={logoutIcon}
                title='Desconectar'
                onClick={handleLogout}
              />
            )}
          </div>
        </>
      ) : (
        <div className='flex justify-evenly items-center w-[70%]'>
          <Link
            to='/'
            className='font-medium text-gray-400 decoration-0 cursor-pointer p-1 hover:text-pink-300 transition-colors'
          >
            Explorar
          </Link>
          <a
            className='font-medium text-gray-400 decoration-0 cursor-pointer p-1 hover:text-pink-300 transition-colors'
            onClick={goToPerfil}
          >
            Meu Perfil
          </a>
        </div>
      )}
    </div>
  );
};

export { NavBar };
