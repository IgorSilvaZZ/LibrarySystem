import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { NavBar } from "../../components/NavBar";
export interface IComplementBook {
  id: string;
  name: string;
}
export interface IBook {
  id: string;
  title: string;
  code: string;
  description: string;
  language: string;
  numberPages: number;
  quantity: number;
  author_id: string;
  category_id: string;
  author: IComplementBook;
  category: IComplementBook;
}

import { categories, filters } from "../../utils/categories";
import { api } from "../../services/api";
import { Book } from "../../components/Book";
import { ModalBook } from "../../components/ModalBook";
import { ModalBase } from "../../components/ModalBase";
import { ModalBag } from "../../components/ModalBag";

const Explore = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [bookSelected, setBookSelected] = useState<IBook>();

  const [filterCategory, setFilterCategory] = useState<string>("all");

  const [openModalBook, setOpenModalBook] = useState(false);
  const [openModalBag, setOpenModalBag] = useState(false);

  function handleBook(book: IBook) {
    setOpenModalBook(true);
    setBookSelected(book);
  }

  async function getAllBooks() {
    try {
      const { data } = await api.get<IBook[]>("/books");

      setBooks(data);
    } catch (error) {
      toast.error("Erro ao carregar livros!");
    }
  }

  async function getBooksCategory(category: string) {
    try {
      const { data } = await api.get<IBook[]>("/books/categories", {
        params: {
          name: category,
        },
      });

      setBooks(data);
    } catch (error) {
      toast.error("Erro ao careggar livros!");
    }
  }

  async function handleCategory(filter: string) {
    setFilterCategory(filter);

    if (filter !== "all") {
      getBooksCategory(filters[filter]);
    } else {
      getAllBooks();
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <ModalBase
        isOpen={openModalBook}
        onClickClose={() => {
          setOpenModalBook(!openModalBook);
        }}
      >
        <ModalBook book={bookSelected} />
      </ModalBase>

      <ModalBase
        isOpen={openModalBag}
        onClickClose={() => {
          setOpenModalBag(!openModalBag);
        }}
      >
        <ModalBag />
      </ModalBase>

      <NavBar
        onClickBag={() => setOpenModalBag(!openModalBag)}
        isSearch={true}
      />

      <div className='flex items-start w-[95vw] my-5'>
        <section className='flex flex-col w-1/4 h-fit'>
          <span className='text-2xl font-bold text-pink-300'>Categorias</span>
          {categories.map(({ name, filter }) => (
            <span
              className='p-1 text-sm font-medium text-gray-400 cursor-pointer hover:text-pink-300 transition-colors'
              key={name}
              onClick={() => handleCategory(filter)}
            >
              {name}
            </span>
          ))}
        </section>

        <div className='w-3/4 h-fit'>
          <span className='text-2xl font-bold text-pink-300'>
            Filtrando por{" "}
            <span className='p-1 text-2xl font-medium text-gray-400'>
              {filters[filterCategory]}
            </span>
          </span>
          <section className='flex flex-wrap gap-0 h-full w-full my-2'>
            {books.map((book) => (
              <span key={book.id} onClick={() => handleBook(book)}>
                <Book
                  width='[300px]'
                  height='[300px]'
                  book={book}
                  isLoan={false}
                />
              </span>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Explore;
