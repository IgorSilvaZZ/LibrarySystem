import { useAuth } from "../../hooks/useAuth";

import bookIcon from "../../assets/book-item.png";
import trashIcon from "../../assets/trash.png";

export const ModalBag = () => {
  const { bag, clearBag, deleteBookBag } = useAuth();

  if (bag.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <p className='text-4xl text-pink-400 font-semibold'>
          Nenhum Livro Adicionado!
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-between h-full w-full overflow-x-hidden overflow-y-auto'>
      {bag.map((book) => (
        <>
          <div
            className='w-[95%] px-2 h-24 flex gap-20 items-center rounded-xl shadow-3xl my-3'
            key={book.id}
          >
            <img className='w-16' src={bookIcon} alt='Book Icon' />

            <span className='h-4/5 w-3/5 flex flex-col gap-1'>
              <p className='text-base font-semibold text-pink-400'>
                {book.title}
              </p>
              <p className='text-base text-gray-400'>{book.author.name}</p>
              <p className='text-base text-gray-400'>{book.category.name}</p>
            </span>

            <img
              className='w-8 opacity-60 cursor-pointer transition-all hover:opacity-100'
              src={trashIcon}
              alt='Icon Delete'
              onClick={() => deleteBookBag(book.id)}
            />
          </div>
        </>
      ))}
      <div className='w-3/4 h-1/5 flex items-center justify-evenly'>
        <button className='w-1/2 p-3 bg-pink-500 text-white rounded-xl border-none outline-none cursor-pointer transition-colors hover:bg-pink-600 mb-2'>
          Realizar Emprestimos
        </button>

        <button
          className='w-1/4 p-3 bg-red-500 text-white rounded-xl border-none outline-none cursor-pointer transition-colors hover:bg-red-600 mb-2'
          onClick={clearBag}
        >
          Limpar Bolsa
        </button>
      </div>
    </div>
  );
};
