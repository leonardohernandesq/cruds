import React from 'react'
import LinkHeader from './LinkHeader'

const Header = () => {
	const allLinks = [
		{ id: 1, link: 'crud1', title: 'Crud 1' },
		{ id: 2, link: 'crud2', title: 'Crud 2' },
		{ id: 3, link: 'crud3', title: 'Crud 3' },
		{ id: 4, link: 'crud4', title: 'Crud 4' },
		{ id: 5, link: 'crud5', title: 'Crud 5' }
	]
	return (
		<header>
			<nav className='flex gap-5 text-3xl'>
				{allLinks.map((linkUnique) => (
					<LinkHeader link={linkUnique.link} title={linkUnique.title} key={linkUnique.id} />
				))}
			</nav>
		</header>
	)
}

export default Header