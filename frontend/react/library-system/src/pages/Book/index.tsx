import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

import { NavBar } from "../../components/NavBar";
import { Book as BookItem } from "../../components/Book";

import { IBook } from "../Explore";

import bookImg from "../../assets/book-item.png";

const Book = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState<IBook>({
    id: "97f975b5-8577-48df-8365-7f79afb884bf",
    title: "Harry Potter e o prisioneiro de Azkaban",
    description:
      "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação humor e magia 'Harry Potter e o prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid o sábio diretor Alvo Dumbledor a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin que guarda grandes surpresas para Harry.",
    numberPages: 288,
    language: "Português",
    code: "910261244",
    quantity: 0,
    category_id: "b218b565-612d-49c5-be19-ba1e9744e400",
    author_id: "1f332f98-d02c-47f3-b79b-41af2e1ee1aa",
    author: {
      id: "1f332f98-d02c-47f3-b79b-41af2e1ee1aa",
      name: "J.K. Rowling",
    },
    category: {
      id: "b218b565-612d-49c5-be19-ba1e9744e400",
      name: "Aventura",
    },
  });

  return (
    <>
      <NavBar isSearch={true} />

      <div className='w-full h-[65vh] flex items-center justify-evenly'>
        <div className='w-1/5 h-[90%] flex flex-col items-center justify-center gap-2'>
          <img src={bookImg} alt='Image Book' className='w-3/4' />
        </div>

        <div className='w-1/2 h-[90%] flex flex-col gap-2'>
          <ArrowLeft
            onClick={() => navigate("/")}
            size={25}
            color='#fea6b5'
            className='mb-2 cursor-pointer font-semibold'
          />

          <span className='text-2xl font-bold text-pink-300'>
            Eleanor & Park
          </span>

          <span className='text-base font-bold text-zinc-500'>
            Rainbow Rowell
          </span>

          <div className='w-11/12 h-30 overflow-y-auto my-1'>
            <p className='text-[15px] leading-relaxed text-zinc-400'>
              Eleanor é nova na cidade. Com roupas inusitadas, cachos ruivos
              indomáveis e uma família problemática, ela sente que nunca vai
              conseguir se encaixar. Park senta sozinho no ônibus da escola.
              Sempre de camiseta preta, fones de ouvido e a cabeça enfiada num
              livro, acha que consegue passar despercebido.
            </p>
          </div>

          <div className='w-11/12 h-1/5 flex items-center'>
            <div className='w-3/5 flex flex-col gap-2'>
              <span className='text-base font-bold text-pink-300'>
                Números de Paginas
              </span>
              <span className='text-sm font-bold text-zinc-400'>360</span>
            </div>

            <div className='w-2/5 flex flex-col gap-2'>
              <span className='text-base font-bold text-pink-300'>
                Categoria
              </span>
              <span className='text-sm font-bold text-zinc-400'>Romance</span>
            </div>
          </div>

          <button className='w-[35%] p-3 mt-1 rounded-lg text-white font-semibold bg-pink-500 cursor-pointer transition-all hover:bg-pink-600'>
            Realizar Emprestimo
          </button>
        </div>
      </div>

      <div className='w-full flex item-center justify-center'>
        <div className='w-4/5 flex flex-col gap-2'>
          <span className='text-2xl font-bold text-pink-300'>
            Outros livros da mesma categoria
          </span>

          <div className='w-full flex items-center gap-2'>
            <BookItem
              book={book}
              isLoan={false}
              height='[250px]'
              width='[250px]'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
