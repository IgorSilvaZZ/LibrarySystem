import { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Input } from "../../Form/Input";
import { InputMask } from "../../Form/InputMask";

import { UserFormData } from "../UserForm";
interface LibrarianForm extends UserFormData {
  identification: string;
}

export const LibrarianForm = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<LibrarianForm> = (data) => {
    // Enviar para Api os dados do usuario
    console.log(data);
  };

  return (
    <div className='flex flex-col mx-10 h-[85%] gap-1'>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2 h-20 w-3/5'>
          <label className='text-sm text-pink-300 font-medium'>
            Nome Completo
          </label>
          <Input name='name' />
        </div>

        <div className='flex flex-col gap-2 h-20 w-3/5'>
          <label className='text-sm text-pink-300 font-medium'>Email</label>
          <Input type='email' name='email' />
        </div>

        <div className='flex gap-1 item-center w-3/5 h-20'>
          <div className='flex flex-col gap-2 h-20 w-2/5'>
            <label className='text-sm text-pink-300 font-medium'>
              Identificação
            </label>
            <InputMask name='identification' mask={"99.999-9"} />
          </div>

          <div className='flex flex-col gap-2 h-20 w-7/12'>
            <label className='text-sm text-pink-300 font-medium'>RG</label>
            <InputMask mask={"99.999.999-9"} name='rg' />
          </div>
        </div>

        <div className='flex flex-col gap-2 h-20 w-3/5'>
          <label className='text-sm text-pink-300 font-medium'>CPF</label>
          <InputMask mask={"999.999.999-99"} name='cpf' />
        </div>

        <div className='flex flex-col gap-2 h-20 w-3/5'>
          <label className='text-sm text-pink-300 font-medium'>Senha</label>
          <Input type='password' name='password' />
        </div>

        <button
          type='submit'
          className='w-3/5 p-3 rounded text-white font-semibold bg-pink-300 mt-3 cursor-pointer transition-colors hover:bg-pink-400'
        >
          Enviar
        </button>
      </Form>
    </div>
  );
};
