import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { NavBar } from "../../components/NavBar";
import {
  BoxBooks,
  ExploreContainer,
  ItemCategory,
  NameCategory,
  SectionCategory,
  SectionsBooks,
  TitleContainer,
} from "./style";

export interface IComplementBook {
  id: string;
  name: string;
}
export interface IBook {
  id: string;
  title: string;
  code: string;
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

const Explore = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("all");

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
    <div>
      <NavBar isSearch={true} />

      <div className='flex items-start w-[95vw] mx-10'>
        <SectionCategory>
          <TitleContainer>Categorias</TitleContainer>
          {categories.map(({ name, filter }) => (
            <ItemCategory key={name} onClick={() => handleCategory(filter)}>
              {name}
            </ItemCategory>
          ))}
        </SectionCategory>

        <BoxBooks>
          <TitleContainer>
            Filtrando por <NameCategory>{filters[filterCategory]}</NameCategory>
          </TitleContainer>
          <SectionsBooks>
            {books.map((book) => (
              <Book key={book.id} book={book} isLoan={false} />
            ))}
          </SectionsBooks>
        </BoxBooks>
      </div>
    </div>
  );
};

export default Explore;
