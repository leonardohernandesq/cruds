'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'
import { FaAngleLeft, FaTrash } from 'react-icons/fa';

/* 
  3. CRUD de Posts
  - Campos: título, conteúdo
  - Objetivo: Persistir os dados em localStorage e manter o estado entre sessões.
  - Desafio: Integrar useState com useEffect para carregar e salvar os dados automaticamente.
  - Ferramenta: useState + useEffect
*/

interface IPost {
  title: string;
  content: string;
}

const Crud3 = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const router = useRouter();

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    setPosts(posts);
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title || !form.content) {
      alert('Preencha o formulário corretamente')
    }

    setPosts([...posts, form]);
    localStorage.setItem('posts', JSON.stringify([...posts, form]));
  }

  const handleDelete = (title: string) => {
    localStorage.removeItem('posts');
    const newPosts = posts.filter((post) => post.title !== title);

    localStorage.setItem('posts', JSON.stringify(newPosts));
    setPosts(newPosts);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
        <button className='flex items-center bg-zinc-300 py-2 px-6 rounded-sm' onClick={() => router.back()}> <FaAngleLeft /> Voltar</button>

        <h1 className='text-2xl'>Digite seu post</h1>
        <form className='w-full' onSubmit={(e) => handleSubmit(e)}>
          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Título do Post: </label>
            <input name='name' className='border rounded-sm py-1 px-3' type="text" value={form.title} onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))} />
          </div>

          <div className='flex flex-col gap-1 my-3'>
            <label htmlFor="name">Conteúdo: </label>
            <textarea name="content" id="content" cols={20} className='border rounded-sm py-1 px-3 h-40' value={form.content} onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}></textarea>
          </div>

          <button className='w-full bg-zinc-900 text-white p-3 rounded-sm cursor-pointer'>ENVIAR</button>
        </form>

        <section className='grid gap-8 w-full'>
          {
            posts.map((post) => (
              <div key={post.title} className='w-full border relative p-10 flex flex-col justify-center rounded-lg bg-zinc-100 hover:bg-zinc-200 cursor-pointer'>
                <button className='absolute right-5 top-5' onClick={() => handleDelete(post.title)}>
                  <FaTrash />
                </button>

                <h1 className='font-bold text-2xl mb-2'>{post.title}</h1>

                <p>{post.content}</p>
              </div>
            ))
          }
        </section>
      </main>
    </div>
  )
}

export default Crud3