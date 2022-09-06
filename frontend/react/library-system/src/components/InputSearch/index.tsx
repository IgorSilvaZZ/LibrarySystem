import searchIcon from "../../assets/searchIcon.png";

interface IInputSearch {
  widthContainer: string;
}

export const InputSearch = ({ widthContainer }: IInputSearch) => {
  return (
    <div
      className={`flex w-[${widthContainer}] h-[50%] p-[10px] border border-solid border-gray-300 rounded-lg`}
    >
      <img className='w-auto' src={searchIcon} />
      <input
        className='p-3 w-full outline-none bg-none border-none'
        placeholder='Pesquise um Livro'
      />
    </div>
  );
};
