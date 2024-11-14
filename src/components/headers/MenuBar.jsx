import Link from 'next/link'
import React from 'react'

const MenuBar = () => {

  const menuData = [
    {
      id: 0,
      text: 'Home',
      url: '/',
      dropdown: null,
    },
    {
      id: 1,
      text: 'Shop',
      url: '/shop',
      dropdown: null,
    },
    {
      id: 2,
      text: 'About',
      url: '/about',
      dropdown: null,
    },
    {
      id: 3,
      text: 'Contact',
      url: '/contact',
      dropdown: null,
    },
    {
      id: 4,
      text: 'Blog',
      url: '/blog',
      dropdown: null,
    },
  ]

  return (
    <nav>
      <ul className='flex justify-between items-center gap-x-60'>
            {menuData.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className='text-lg font-medium capitalize relative after:absolute after:content-[""] after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full'>
                  {item.text}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  )
}

export default MenuBar