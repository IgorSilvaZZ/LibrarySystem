import bookImage from "../../assets/book-item.png";
import { IBook } from "../../pages/Explore";

export interface IModal {
  isOpen: boolean;
  onClickClose: () => void;
  book?: IBook;
}

export const ModalBook = ({ isOpen, onClickClose, book }: IModal) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen fixed transition-all'>
      <div className='flex flex-col w-[70%] h-[70%] bg-white rounded-xl border-2 border-pink-400'>
        <div className='flex items-center justify-end my-1 mx-2'>
          <span
            className='text-4xl text-pink-400 cursor-pointer transition-colors hover:text-pink-500'
            onClick={onClickClose}
          >
            &times;
          </span>
        </div>
        <div className='flex h-full w-full overflow-x-hidden overflow-y-auto border '>
          <div className='flex flex-col justify-evenly items-center w-[30%] h-[95%] m-2'>
            <img className='w-1/2' src={bookImage} alt='Book Image' />
            <button className='w-[70%] p-3 bg-pink-500 text-white rounded-xl border-none outline-none cursor-pointer transition-colors hover:bg-pink-600'>
              Ver mais
            </button>
          </div>

          <div className='flex flex-col w-3/5 h-[95%] m-2'>
            <h2 className='text-pink-300 mb-2'>{book?.title}</h2>
            <p className='text-base mb-4'>
              Quantidade Disponiveis: {book?.quantity}
            </p>
            <p className='text-base mb-4'>Categoria: {book?.category.name}</p>
            <span className='text-base text-gray-400'>{book?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
