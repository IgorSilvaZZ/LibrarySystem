import { IBook } from "../../pages/Explore";

import bookImage from "../../assets/book-item.png";
import addBagIcon from "../../assets/add-bag.png";
import { useAuth } from "../../hooks/useAuth";

export interface IModalBook {
  book?: IBook;
}

export const ModalBook = ({ book }: IModalBook) => {
  const { handleBag } = useAuth();

  return (
    <>
      <div className='flex flex-col justify-evenly items-center w-[30%] h-[95%] m-2'>
        <img className='w-1/2' src={bookImage} alt='Book Image' />
        <button className='w-[70%] p-3 bg-pink-500 text-white rounded-xl border-none outline-none cursor-pointer transition-colors hover:bg-pink-600'>
          Ver mais
        </button>
      </div>

      <div className='flex flex-col w-3/5 h-[95%] m-2'>
        <span className='flex justify-between items-center text-pink-300 mb-3'>
          {book?.title}

          <img
            className='w-[4%] cursor-pointer'
            src={addBagIcon}
            alt='Add Bag Icon'
            title='Adicionar a bolsa'
            onClick={() => handleBag(book as IBook)}
          />
        </span>

        <p className='text-base mb-4'>
          Quantidade Disponiveis: {book?.quantity}
        </p>
        <p className='text-base mb-4'>Categoria: {book?.category.name}</p>
        <span className='text-base text-gray-400'>{book?.description}</span>
      </div>
    </>
  );
};
