'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const Crud4 = () => {
  const router = useRouter();
   /* 
    4. CRUD de Tarefas
    - Campos: título, descrição, status (ex: pendente, concluído)
    - Objetivo: Compartilhar estado entre componentes com Context e permitir filtro por status.
    - Desafio: Criar o Contexto, Provider e consumir os dados corretamente em diferentes componentes.
    - Ferramenta: React Context
  */
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
        <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft/> Voltar</button>
        
        <h1 className='text-2xl'>Digite sua Tarefa</h1>
        <form className='w-full'>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Título: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" />
          </div>

          <div className='flex flex-col gap-1 my-3'>
            <label >Status: </label>
            <div className='flex gap-4'>
              <div>
                <input type='radio' name="status" id="nova_tarefa" />
                <label className='ml-1' htmlFor="nova_tarefa">Nova Tarefa</label>
              </div>
              <div>
                <input type='radio' name="status" id="finalizada" />
                <label className='ml-1' htmlFor="finalizada">Finalizada</label>
              </div>
              <div>
                <input type='radio' name="status" id="cancelada" />
                <label className='ml-1' htmlFor="cancelada">Cancelada</label>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Descrição: </label>
            <textarea name="content" id="content" cols={20} className='border rounded-sm py-1 px-3 h-40'></textarea>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Crud4