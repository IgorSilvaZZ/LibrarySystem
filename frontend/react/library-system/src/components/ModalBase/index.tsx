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
    <div className='flex items-center justify-center top-1/2 left-1/2 translate-x-translate-modal translate-y-translate-modal fixed transition-all'>
      <div className='flex flex-col w-[70vw] h-[75vh] bg-white rounded-xl border-2 border-pink-400'>
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
