import bookImg from "../../assets/book-item.png";

import { IBook } from "../../pages/Explore";

export interface IBookComponent {
  isLoan: boolean;
  book: IBook;
}

export const Book = ({ isLoan, book }: IBookComponent) => {
  return (
    <div className='w-[300px] h-[300px] mt-2 mr-2 mb-1 ml-2 rounded-xl shadow-3xl'>
      <section className='flex items-center justify-center w-full h-4/5 bg-white'>
        <img className='w-2/4 cursor-pointer transition-all' src={bookImg} />
      </section>
      <section className='flex flex-col items-center justify-center w-full h-1/5 bg-pink-300 rounded-1xl'>
        <p className='text-white text-xs font-semibold mb-[2px] cursor-pointer'>
          {book.title}
        </p>
        {isLoan ? (
          <p className='text-gray-400 text-xs font-semibold mb-[2px] cursor-pointer'>
            Igor Silva
          </p>
        ) : (
          <p className='text-gray-400 text-xs font-semibold mb-[2px] cursor-pointer'>
            Nina LaCour
          </p>
        )}
      </section>
    </div>
  );
};
