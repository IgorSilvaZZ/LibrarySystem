import bookImage from "../../assets/book-item.png";
import { IModalBook } from "../ModalBook";

export const ModalEditBook = ({ book }: IModalBook) => {
  return (
    <>
      <div className='flex flex-col justify-evenly items-center w-[30%] h-[95%] m-2'>
        <img className='w-1/2' src={bookImage} alt='Book Image' />
        <span className='text-pink-300 text-center font-medium'>
          {book?.title}
        </span>
      </div>

      <div className='flex flex-col w-[95%] h-full m-2'>
        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-full'>
            <label className='text-sm text-pink-300 font-medium'>Titulo</label>
            <input
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
              value={book?.title}
            />
          </div>
        </div>

        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-1/2'>
            <label className='text-sm text-pink-300 font-medium'>Autor</label>
            <select
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
              value={book?.author.name}
            >
              <option value='J.K Rowling'>J.K Rowling</option>
              <option value='Raibow'>Raibow</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 h-20 w-1/2'>
            <label className='text-sm text-pink-300 font-medium'>
              Numero de Paginas
            </label>
            <input
              value={book?.numberPages}
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
            />
          </div>
        </div>

        <div className='flex items-center gap-2 w-full h-24'>
          <div className='flex flex-col gap-2 h-20 w-1/2'>
            <label className='text-sm text-pink-300 font-medium'>
              Categoria
            </label>
            <select
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
              value={book?.category.name}
            >
              <option value='Ficção'>Ficção</option>
              <option value='Aventura'>Aventura</option>
              <option value='Suspensa'>Suspensa</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 h-20 w-1/2'>
            <label className='text-sm text-pink-300 font-medium'>
              Linguagem
            </label>
            <select
              className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
              value={book?.language}
            >
              <option value='Portugues'>Portugues</option>
              <option value='Ingles'>Ingles</option>
              <option value='Espanhol'>Espanhol</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-sm text-pink-300 font-medium overflow-y-auto'>
            Descrição
          </label>
          <textarea
            value={book?.description}
            className='border border-zinc-300 p-5 rounded outline-none text-zinc-400 resize-none'
          />
        </div>

        <div className='h-16 w-full flex items-center justify-center gap-4 mb-5 mt-3'>
          <button className='w-2/5 p-3 rounded text-white font-semibold bg-pink-300 cursor-pointer transition-colors hover:bg-pink-400'>
            Editar
          </button>

          <button className='w-2/5 p-3 rounded text-white font-semibold bg-red-500 cursor-pointer transition-colors hover:bg-red-600'>
            Excluir
          </button>
        </div>
      </div>
    </>
  );
};
