export const LibrarianForm = () => {
  return (
    <div className='flex flex-col mx-10 h-[85%] gap-1'>
      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>
          Nome Completo
        </label>
        <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>Email</label>
        <input
          className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
          type='email'
        />
      </div>

      <div className='flex gap-1 item-center w-3/5 h-20'>
        <div className='flex flex-col gap-2 h-20 w-2/5'>
          <label className='text-sm text-pink-300 font-medium'>
            Identificação
          </label>
          <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
        </div>

        <div className='flex flex-col gap-2 h-20 w-7/12'>
          <label className='text-sm text-pink-300 font-medium'>RG</label>
          <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
        </div>
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>CPF</label>
        <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
      </div>

      <div className='flex flex-col gap-2 h-20 w-3/5'>
        <label className='text-sm text-pink-300 font-medium'>Senha</label>
        <input
          className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
          type='password'
        />
      </div>

      <button className='w-3/5 p-3 rounded text-white font-semibold bg-pink-300 mt-3 cursor-pointer transition-colors hover:bg-pink-400'>
        Enviar
      </button>
    </div>
  );
};
