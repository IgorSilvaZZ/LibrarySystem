export interface IBackGroundProps {
  children: JSX.Element;
}

export const Background = ({ children }: IBackGroundProps) => {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-white-container'>
      {children}
    </div>
  );
};
