'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa';

const Crud2 = () => {
  
 /* 
  2. CRUD de Produtos
  - Campos: nome, preço, categoria
  - Objetivo: Aprender a utilizar useReducer para gerenciar estado complexo com ações.
  - Desafio: Definir e organizar bem os tipos de ação no reducer (ADD, EDIT, DELETE).
  - Ferramenta: useReducer


 */
  interface IProduct {
    id?: number;
    name: string;
    price: string;
    category: string;
  }

  const router = useRouter();

  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [form, setform] = useState<IProduct>({id: undefined, name: '', price: '', category: ''})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let id: number;

    do {
      id = Math.floor(Math.random() * 99999) + 1;
    } while (products.some(item => item.id === id));

    if(id){
      setProducts(prev => [...prev, { ...form, id }]);
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
          <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft/> Voltar</button>
        
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1 my-3'>
              <label htmlFor="name">Nome do Produto: </label>
              <input name='name' className='border rounded-sm py-1 px-3' type="text" value={form.name} onChange={(e) => setform(prev => ({...prev, name: e.target.value}))} />
            </div>
            <div className='flex flex-col gap-1 my-3'>
              <label htmlFor="price">Preço: </label>
              <input name='price' className='border rounded-sm py-1 px-3' type="text" value={form.price} onChange={(e) => setform(prev => ({...prev, price: e.target.value}))} />
            </div>

            <div className='flex flex-col gap-1 my-3'>
              <label htmlFor="category">Categoria: </label>
              <input name='category' className='border rounded-sm py-1 px-3' type="text" value={form.category} onChange={(e) => setform(prev => ({...prev, category: e.target.value}))} />
            </div>

            <button className='w-full bg-purple-700 text-white p-2 rounded-sm mt-2'>
              Adicionar
            </button>
          </form>

          <div className='w-full border'>
            <div className='flex justify-between'>
              <strong className='border w-full flex justify-center'>Nome</strong>
              <strong className='border w-full flex justify-center'>Preço</strong>
              <strong className='border w-full flex justify-center'>Categoria</strong>
            </div>
            {
              products.map((product) => (
                <div className='flex justify-between' key={product.id}>
                  <div className='border flex w-full justify-center'>{product.name}</div>
                  <div className='border flex w-full justify-center'>R$ {product.price}</div>
                  <div className='border flex w-full justify-center'>{product.category}</div>
                </div>
              ))
            }

          </div>
      </main>
    </div>
  )
}

export default Crud2