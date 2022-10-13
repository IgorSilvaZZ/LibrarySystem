import { useState } from "react";

import { NavBar } from "../../components/NavBar";
import { CreateBookProfile } from "../../components/Profile/CreateBook";
import { EditBook } from "../../components/Profile/EditBook";
import { GeneralProfile } from "../../components/Profile/General";
import { MyBooks } from "../../components/Profile/MyBooks";

const Profile = () => {
  const [optionProfile, setOptionProfile] = useState<string>("general");

  return (
    <>
      <NavBar isSearch={false} />

      <div className='flex items-start w-[95vw] my-5'>
        <div className='flex flex-col gap-3 w-1/4'>
          <span className='text-xl text-pink-400 font-semibold'>Pessoal</span>

          <section className='w-full flex flex-col gap-2 h-16 mx-2 mb-2'>
            <p
              className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'
              onClick={() => setOptionProfile("general")}
            >
              Geral
            </p>
            <p
              className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'
              onClick={() => setOptionProfile("my-books")}
            >
              Todos Emprestimos Realizados
            </p>
          </section>

          <span className='text-xl text-pink-400 font-semibold'>Livros</span>

          <section className='w-full flex flex-col gap-2 h-16 mx-2'>
            <p
              className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'
              onClick={() => setOptionProfile("create-book")}
            >
              Criar Novo Livro
            </p>
            <p
              className='text-sm text-zinc-400 font-semibold cursor-pointer transition-colors hover:text-pink-300'
              onClick={() => setOptionProfile("edit-books")}
            >
              Editar & Deletar Livro
            </p>
          </section>
        </div>

        {optionProfile === "general" && <GeneralProfile />}
        {optionProfile === "create-book" && <CreateBookProfile />}
        {optionProfile === "my-books" && <MyBooks />}
        {optionProfile === "edit-books" && <EditBook />}
      </div>
    </>
  );
};

export default Profile;
