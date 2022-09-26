import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import openBookImage from "../../assets/open-book.png";
import librarianImage from "../../assets/librarian.png";
import bannerImage from "../../assets/footer-img2.png";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className=' flex justify-center items-center w-screen h-screen bg-white-container'>
      <div className='flex h-[90%] w-[70%] bg-white rounded-xl'>
        <div className='flex items-center justify-center h-full w-[70%]'>
          <div className='flex justify-evenly flex-col w-full h-full'>
            <div className='flex flex-col px-12 text-3xl font-semibold text-pink-300'>
              <ArrowLeft
                onClick={() => navigate("/login")}
                size={25}
                color='#fea6b5'
                className='mb-2 cursor-pointer font-semibold'
              />

              <span>Escolha um tipo de conta</span>
            </div>

            <div className='flex justify-center items-center h-3/5 w-full'>
              <div className='flex flex-col justify-evenly items-center w-2/5 h-3/5 m-2 rounded-3xl text-white text-2xl font-bold cursor-pointer bg-pink-400 transition-all hover:w-[45%] hover:h-[65%]'>
                <img
                  className='w-2/6'
                  src={openBookImage}
                  alt='Item Reader Choose Register'
                />
                <span>Leitor</span>
              </div>

              <div className='flex flex-col justify-evenly items-center w-2/5 h-3/5 m-2 rounded-3xl text-white text-2xl font-bold cursor-pointer bg-pink-300 transition-all hover:w-[45%] hover:h-[65%]'>
                <img
                  className='w-2/6'
                  src={librarianImage}
                  alt='Item Librarian Choose Register'
                />
                <span>Bibliotecário</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center w-[30%] h-full rounded-2xl bg-pink-300'>
          <img
            src={bannerImage}
            className='w-[90%] cursor-pointer transition-all hover:w-[95%]'
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
