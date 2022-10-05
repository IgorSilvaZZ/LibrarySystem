import { NavBar } from "../../components/NavBar";

const Profile = () => {
  return (
    <>
      <NavBar isSearch={false} />

      <div className='flex items-start w-[95vw] my-5'>
        <div className='flex flex-col gap-3 w-1/4'>
          <span className='text-xl text-pink-400 font-semibold'>Pessoal</span>

          <section className='w-full flex flex-col gap-2 h-16 mx-2 mb-2'>
            <p className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'>
              Geral
            </p>
            <p className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'>
              Todos Emprestimos Realizados
            </p>
          </section>

          <span className='text-xl text-pink-400 font-semibold'>Livros</span>

          <section className='w-full flex flex-col gap-2 h-16 mx-2'>
            <p className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'>
              Criar Novo Livro
            </p>
            <p className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'>
              Editar & Deletar Livro
            </p>
          </section>
        </div>

        <div className='flex flex-col gap-2 w-3/4'>
          <span className='text-2xl text-pink-300 font-semibold'>
            Meu Perfil
          </span>

          <p className='text-zinc-400 font-medium'>Altere suas informações!</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
