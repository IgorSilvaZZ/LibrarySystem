import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export const Input = ({ name, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <input
      name={name}
      ref={inputRef}
      defaultValue={defaultValue}
      className='border border-zinc-300 p-3 rounded outline-none text-zinc-400'
      {...rest}
    />
  );
};
