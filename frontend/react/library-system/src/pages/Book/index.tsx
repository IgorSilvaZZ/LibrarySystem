import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

import { api } from "../../services/api";

import { NavBar } from "../../components/NavBar";
import { Book as BookItem } from "../../components/Book";

import { IBook } from "../Explore";

import bookImg from "../../assets/book-item.png";

const Book = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState<IBook>();
  const [booksCategory, setBooksCategory] = useState<IBook[]>([]);

  async function loadBook() {
    const { data } = await api.get(`/books/${id}`);
    const { data: categoriesResponse } = await api.get("/books/categories", {
      params: {
        name: data.category.name,
      },
    });

    const filterBooks = categoriesResponse.filter(
      (item: IBook) => item.id !== data.id
    );

    setBook(data);
    setBooksCategory(filterBooks);
  }

  useEffect(() => {
    loadBook();
  }, []);

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
            {book?.title}
          </span>

          <span className='text-base font-bold text-zinc-500'>
            {book?.author.name}
          </span>

          <div className='w-11/12 h-30 overflow-y-auto my-1'>
            <p className='text-[15px] leading-relaxed text-zinc-400'>
              {book?.description}
            </p>
          </div>

          <div className='w-11/12 h-1/5 flex items-center'>
            <div className='w-3/5 flex flex-col gap-2'>
              <span className='text-base font-bold text-pink-300'>
                Números de Paginas
              </span>
              <span className='text-sm font-bold text-zinc-400'>
                {book?.numberPages}
              </span>
            </div>

            <div className='w-2/5 flex flex-col gap-2'>
              <span className='text-base font-bold text-pink-300'>
                Categoria
              </span>
              <span className='text-sm font-bold text-zinc-400'>
                {book?.category.name}
              </span>
            </div>
          </div>

          <button className='w-[35%] p-3 mt-1 rounded-lg text-white font-semibold bg-pink-500 cursor-pointer transition-all hover:bg-pink-600'>
            Realizar Emprestimo
          </button>
        </div>
      </div>

      {booksCategory.length > 0 && (
        <div className='w-full flex item-center justify-center'>
          <div className='w-4/5 flex flex-col gap-2'>
            <span className='text-2xl font-bold text-pink-300'>
              Outros livros da mesma categoria
            </span>

            <div className='w-full flex items-center gap-2'>
              {booksCategory.map((itemBook) => (
                <BookItem
                  key={itemBook.id}
                  book={itemBook}
                  isLoan={false}
                  height='w-[250px]'
                  width='h-[250px]'
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
