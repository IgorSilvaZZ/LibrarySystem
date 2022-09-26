import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import bannerImage from "../../assets/login-img.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-white-container'>
      <div className='flex h-4/5 w-[70%] bg-white rounded-xl'>
        <div className='flex items-center justify-center w-[70%] h-full'>
          <div className='flex flex-col h-4/5 w-4/5'>
            <ArrowLeft
              onClick={() => navigate("/")}
              size={25}
              color='#fea6b5'
              className='mb-2 cursor-pointer font-semibold'
            />

            <span className='text-pink-300 text-3xl font-semibold mb-3'>
              Slibrary
            </span>
            <p className='text-zinc-500 text-2xl font-semibold mb-10'>
              Entrar na Conta
            </p>

            <input
              className='w-3/5 p-3 text-base bg-none outline-none rounded mb-5 text-zinc-300 border border-solid border-zinc-300'
              placeholder='Email'
            />

            <input
              className='w-3/5 p-3 text-base bg-none outline-none rounded mb-5 text-zinc-300 border border-solid border-zinc-300'
              placeholder='Senha'
            />

            <button className='w-3/5 mt-5 p-3 border-none outline-none bg-pink-300 text-white font-semibold rounded transition-colors cursor-pointer hover:bg-pink-400'>
              Entrar
            </button>

            <p className='text-pink-300 font-medium text-xs mt-5 transition-colors cursor-pointer hover:text-pink-400'>
              Nao tem conta? Registre-se
            </p>
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

export default Login;