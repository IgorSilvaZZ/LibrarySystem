export interface IModalBase {
  isOpen: boolean;
  children: JSX.Element;
  onClickClose: () => void;
}

export const ModalBase = ({ isOpen, onClickClose, children }: IModalBase) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};
