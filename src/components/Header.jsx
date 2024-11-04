import React from 'react'
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between px-5 items-center h-[70px] w-full bg-[#111]'>
        <div className="nav-left text-3xl text-white">
            <i className="ri-star-smile-fill"></i>
            Quick<span className='text-orange-500'>CV</span>
        </div>
        <div className="nav-right">
            <a href="/" className='px-3 py-2 border rounded-md text-white hover:bg-white hover:text-black duration-150'><i className="ri-github-fill mr-1"></i>Github</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
