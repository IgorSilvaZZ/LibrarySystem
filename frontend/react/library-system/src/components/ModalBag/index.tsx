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
    <div className='flex flex-col items-center h-full w-full gap-4 overflow-x-hidden overflow-y-auto'>
      {bag.map((book) => (
        <div
          className='w-[95%] px-2 h-2/5 flex gap-20 items-center rounded-xl shadow-3xl border-pink-400 my-3'
          key={book.id}
        >
          <img className='w-[12%]' src={bookIcon} alt='Book Icon' />

          <span className='h-4/5 w-3/5 flex flex-col gap-3'>
            <p className='text-xl font-semibold text-pink-400'>{book.title}</p>
            <p className='text-base text-gray-400'>{book.author.name}</p>
            <p className='text-base text-gray-400'>{book.category.name}</p>
          </span>

          <img
            className='w-[5%] opacity-60 cursor-pointer transition-all hover:opacity-100'
            src={trashIcon}
            alt='Icon Delete'
            onClick={() => deleteBookBag(book.id)}
          />
        </div>
      ))}
    </div>
  );
};
