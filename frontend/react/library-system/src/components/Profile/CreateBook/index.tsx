export const CreateBookProfile = () => {
  return (
    <div className='flex flex-col gap-2 w-3/4'>
      <div className='flex items-center justify-between w-4/5 h-16'>
        <span className='text-2xl font-semibold text-pink-400'>Novo Livro</span>

        <button className='p-3 rounded-lg text-white font-semibold bg-pink-400 mt-3 cursor-pointer transition-colors hover:bg-pink-500'>
          <input className='hidden' type='file' />
          Escolher arquivo CSV
        </button>
      </div>

      <p className='text-zinc-400 text-sm'>
        Cadastre um novo livro para a bibilioteca
      </p>
      <p className='text-zinc-400 text-sm'>
        Ou escolha um arquivo csv para cadastrar novos livros
      </p>

      <div className='flex flex-col gap-4 w-full mt-5'>
        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-1/2'>
            <label className='text-sm text-pink-300 font-medium'>Titulo</label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>

          <div className='flex flex-col gap-2 h-20 w-[30%]'>
            <label className='text-sm text-pink-300 font-medium'>Codigo</label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>
        </div>

        <div className='flex w-full'>
          <div className='flex flex-col gap-2 w-4/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Descrição
            </label>
            <textarea className='border border-zinc-300 p-5 rounded outline-none text-zinc-400 resize-none' />
          </div>
        </div>

        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Numero de Paginas
            </label>
            <input className='border border-zinc-300 p-3 rounded outline-none text-zinc-400' />
          </div>

          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Linguagem
            </label>
            <select className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'>
              <option value='Portugues'>Portugues</option>
              <option value='Ingles'>Ingles</option>
              <option value='Espanhol'>Espanhol</option>
            </select>
          </div>
        </div>

        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Categoria
            </label>
            <select className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'>
              <option value='Ficção'>Ficção</option>
              <option value='Aventura'>Aventura</option>
              <option value='Suspensa'>Suspensa</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>Autor</label>
            <select className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'>
              <option value='J.K Rowling'>J.K Rowling</option>
              <option value='Raibow'>Raibow</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
