export const UserForm = () => {
  return (
    <div className='flex flex-col mx-10 h-4/5 gap-1'>
      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>
          Nome Completo
        </label>
        <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>Email</label>
        <input
          type='email'
          className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
        />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>CPF</label>
        <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>RG</label>
        <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>Senha</label>
        <input
          type='password'
          className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
        />
      </div>

      <button className='w-3/5 p-3 rounded text-white font-semibold bg-pink-300 mt-3 cursor-pointer transition-colors hover:bg-pink-400'>
        Enviar
      </button>
    </div>
  );
};
