import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask, { Props as InputProps } from "react-input-mask";

interface Props extends InputProps {
  name: string;
}

export const InputMask = ({ name, ...rest }: Props) => {
  const inputMaskRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputMaskRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask
      ref={inputMaskRef}
      defaultValue={defaultValue}
      className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
      {...rest}
    />
  );
};
