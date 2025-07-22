'use client'

import React, { FormEvent, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Crud1 = () => {

  /* 
   1. CRUD DE USUÁRIOS
   - Campos: nome, email
   - Objetivo: Aprender a manipular formulários simples e listas com useState.
   - Desafio: Lidar com inputs controlados e atualizar a lista (adicionar, editar, excluir).
   - Ferramenta: useState
  */

  interface IUser {
    name: string;
    email: string;
  }
  const [users, setUsers] = useState<Array<IUser>>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const newUser = {
      name,
      email
    }

    setUsers([...users, newUser]);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Nome do Usuário: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" />
          </div>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="email">Email do Usuário: </label>
            <input name='email' className='border rounded-sm py-1 px-3' type="email" />
          </div>
          <button className='bg-blue-800 text-white py-2 w-full rounded-sm'>
            Salvar
          </button>
        </form>

        <div className='h-96 overflow-scroll'>
          {
            users.map((user) => (
              <div key={user.email} className='flex justify-between items-center my-4 border-b p-2 pb-5'>
                <h3>{user.name} - {user.email}</h3>
                <div className='ml-6 flex gap-2 '>
                  <button className='border rounded-sm p-2 text-yellow-700'><FaEdit className='text-yellow-700' /></button>
                  <button className='border rounded-sm p-2 text-red-700'><FaTrash className='text-red-700' /></button>
                </div>
              </div>
            ))
          }
        </div>

      </main>
    </div>
  )
}

export default Crud1