import { ChangeEvent, InputHTMLAttributes } from "react";
import avatarImg from "../../../assets/user-icon-image.png";

export const GeneralProfile = () => {
  return (
    <div className='flex flex-col gap-2 w-3/4'>
      <span className='text-2xl text-pink-300 font-semibold'>Meu Perfil</span>

      <p className='text-zinc-400 font-medium'>Altere suas informações!</p>

      <div className='flex items-center gap-10 h-40 w-1/2 my-10'>
        <img
          className='w-2/6 cursor-pointer opacity-50 transition-all hover:opacity-100'
          src={avatarImg}
          alt='Avatar User'
        />

        <div className='flex flex-col gap-2'>
          <span className='text-3xl font-semibold text-pink-300'>
            Olá, Igor Silva
          </span>
          <p className='text-base text-zinc-400'>Troque sua foto de perfil</p>
        </div>
      </div>

      <p className='text-lg text-zinc-400'>Atualize seus dados</p>

      <div className='flex flex-col gap-2 w-full'>
        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Nome Completo
            </label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>

          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>E-mail</label>
            <input
              type='email'
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
            />
          </div>
        </div>

        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>CPF</label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>

          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>RG</label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>
        </div>

        <button className='w-2/5 p-3 rounded text-white font-semibold bg-pink-300 mt-3 cursor-pointer transition-colors hover:bg-pink-400'>
          Atualizar
        </button>
      </div>
    </div>
  );
};
