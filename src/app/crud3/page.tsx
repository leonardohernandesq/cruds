'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';

const Crud3 = () => {
   /* 
    3. CRUD de Posts
    - Campos: título, conteúdo
    - Objetivo: Persistir os dados em localStorage e manter o estado entre sessões.
    - Desafio: Integrar useState com useEffect para carregar e salvar os dados automaticamente.
    - Ferramenta: useState + useEffect
  */
  const router = useRouter();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
        <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft/> Voltar</button>
        
        <h1 className='text-2xl'>Digite seu post</h1>
        <form className='w-full'>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Título do Post: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" />
          </div>

          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Conteúdo: </label>
            <textarea name="content" id="content" cols={20} className='border rounded-sm py-1 px-3 h-40'></textarea>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Crud3