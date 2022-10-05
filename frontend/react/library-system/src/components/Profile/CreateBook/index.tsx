export const CreateBookProfile = () => {
  return (
    <div className='flex flex-col gap-2 w-3/4'>
      <div className='flex items-center justify-between w-4/5 h-16'>
        <span className='text-2xl font-semibold text-pink-400'>Novo Livro</span>

        <button className='p-3 rounded-lg text-white font-semibold bg-pink-300 mt-3 cursor-pointer transition-colors hover:bg-pink-400'>
          <input className='hidden' type='file' />
          Escolher arquivo CSV
        </button>
      </div>

      <p className='text-zinc-300 text-lg'>
        Cadastre um novo livro para a bibilioteca
      </p>
      <p className='text-zinc-300 text-lg'>
        Ou escolha um arquivo csv para cadastrar novos livros
      </p>
    </div>
  );
};
