'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { FaAngleLeft, FaEdit, FaTrash } from 'react-icons/fa';

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
    index?: number;
  }


  const router = useRouter();
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [form, setForm] = useState<IUser>({name: '', email: '', index: undefined});


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.index){
      users.splice(form.index, 1, form)
      setUsers(users);
    } else {
      setUsers([...users, form]);
    }

    setForm({name: '', email: '', index: undefined})  
  }

  const handleDelete = (index: number) => {
    const filteredUsers = users.filter((item, i) => i !== index);

    setUsers(filteredUsers);
  }

  const handleEdit = ({name, email, index}: IUser) => {
    setForm({name, email, index});
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft/> Voltar</button>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Nome do Usuário: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" value={form.name} onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}/>
          </div>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="email">Email do Usuário: </label>
            <input name='email' className='border rounded-sm py-1 px-3' type="email" value={form.email} onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))}/>
          </div>
          <button className='bg-blue-800 text-white py-2 w-full rounded-sm'>
            Salvar
          </button>
        </form>

        <div className='h-96 w-full overflow-y-scroll'>
          {
            users.map((user, index) => (
              <div key={user.email} className='flex justify-between items-center my-4 border-b p-2 pb-5'>
                <h3>{user.name} - {user.email}</h3>
                <div className='ml-6 flex gap-2 '>
                  <button onClick={(e) => handleEdit({name: user.name, email: user.email, index})} className='border rounded-sm p-2 text-yellow-700'><FaEdit className='text-yellow-700' /></button>
                  <button onClick={() => handleDelete(index)} className='border rounded-sm p-2 text-red-700'><FaTrash className='text-red-700' /></button>
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