import Link from 'next/link'
import React from 'react'

interface ILinks {
  link: string,
  title: string
}

const LinkHeader = ({link, title}: ILinks) => {
  return (
    <Link className='hover:text-blue-700 hover:animate-bounce transition-colors' href={`/${link}`}>{title}</Link>
  )
}

export default LinkHeader