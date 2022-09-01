import searchIcon from "../../assets/searchIcon.png";

interface IInputSearch {
  widhtContainer: string;
}

export const InputSearch = ({ widhtContainer }: IInputSearch) => {
  return (
    <div
      className={`flex w-[${widhtContainer}] h-[50%] p-[10px] border border-solid border-gray-300 rounded-lg`}
    >
      <img className='w-auto' src={searchIcon} />
      <input
        className='p-3 w-full outline-none bg-none border-none'
        placeholder='Pesquise um Livro'
      />
    </div>
  );
};
