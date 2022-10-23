import { useState } from "react";

import { IBook } from "../../../pages/Explore";
import { Book } from "../../Book";
import { ModalBase } from "../../ModalBase";
import { ModalLoan } from "../../ModalLoan";

export const MyBooks = () => {
  const [myBooks, setMyBooks] = useState<IBook[]>([
    {
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
    },
  ]);

  const [bookSelected, setBookSelected] = useState<IBook>();

  const [openModalBook, setOpenModalBook] = useState(false);

  function handleBook(book: IBook) {
    setOpenModalBook(true);
    setBookSelected(book);
  }

  return (
    <>
      <ModalBase
        isOpen={openModalBook}
        onClickClose={() => {
          setOpenModalBook(!openModalBook);
        }}
      >
        <ModalLoan book={bookSelected} />
      </ModalBase>

      <div className='w-3/4 h-fit'>
        <span className='text-2xl font-bold text-pink-300'>
          Gerencie seus emprestimos!
        </span>

        <section className='flex flex-wrap gap-0 h-full w-full my-2'>
          {myBooks.map((book) => (
            <span key={book.id} onClick={() => handleBook(book)}>
              <Book
                width='w-[300px]'
                height='h-[300px]'
                book={book}
                isLoan={false}
              />
            </span>
          ))}
        </section>
      </div>
    </>
  );
};
