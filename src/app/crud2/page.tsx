'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useReducer, useState } from 'react'
import { FaAngleLeft, FaEdit, FaTrash } from 'react-icons/fa';

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

  type Action =
    | { type: 'ADD_PRODUCT'; payload: IProduct }
    | { type: 'DELETE_PRODUCT'; payload: number }
    | { type: 'EDIT_PRODUCT'; payload: IProduct };

  const reducer = (state: IProduct[], action: Action): IProduct[] => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [...state, { ...action.payload, id: Date.now() }];
      case 'DELETE_PRODUCT':
        return state.filter(p => p.id !== action.payload)
      case 'EDIT_PRODUCT':
        return state.map((product) => product.id === action.payload.id ? action.payload : product);
      default:
        return state;
    }
  }

  const router = useRouter();
  const [form, setForm] = useState<IProduct>({ id: undefined, name: '', price: '', category: '' })
  const [products, dispatch] = useReducer(reducer, []);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.id) {
      dispatch({ type: 'EDIT_PRODUCT', payload: form });
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: form });
    }

    setForm({ name: '', price: '', category: '' });
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
        <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft /> Voltar</button>

        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Nome do Produto: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} />
          </div>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="price">Preço: </label>
            <input name='price' className='border rounded-sm py-1 px-3' type="text" value={form.price} onChange={(e) => setForm(prev => ({ ...prev, price: e.target.value }))} />
          </div>

          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="category">Categoria: </label>
            <input name='category' className='border rounded-sm py-1 px-3' type="text" value={form.category} onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))} />
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
            <strong className='border w-full flex justify-center'>Actions</strong>
          </div>
          {
            products.map((product) => (
              <div className='flex justify-between' key={product.id}>
                <div className='border flex w-full justify-center'>{product.name}</div>
                <div className='border flex w-full justify-center'>R$ {product.price}</div>
                <div className='border flex w-full justify-center'>{product.category}</div>
                <div className='border flex w-full justify-center gap-4'>
                  <button onClick={() => setForm(product)}><FaEdit className='text-purple-700 cursor-pointer' /></button>
                  <button onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product.id! })}><FaTrash className='text-red-700 cursor-pointer' /></button>
                </div>
              </div>
            ))
          }

        </div>
      </main>
    </div>
  )
}

export default Crud2