import React, { useState } from 'react'
import Moon from './Icons/Moon'
import Book from './Icons/Book'
import Sun from './Icons/Sun'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className='container flex justify-between'>
      <h2 className='text-2xl font-bold'>
        <Book />
      </h2>
      <div className='flex gap-3 divide-x-2'>
        <select name='font' id='font' className='dark:bg-slate-800'>
          <option value='Serif'>Serif</option>
          <option value='Roboto'>Roboto</option>
        </select>
        <div className='flex gap-3 pl-3'>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              value=''
              className='outline-none sr-only peer '
              onChange={handleDarkMode}
            />
            <div
              className="w-11 h-5 bg-gray-500 peer-focus:outline-[2px solid transparent] focus-within:outline-offset-[2px] checked:outline-[2px solid transparent]
            rounded-full dark:bg-gray-500 peer-checked:outline-none
            peer-checked:after:translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-[4px] after:left-[6px]
            after:bg-white after:border-gray-300 after:border after:rounded-full
            after:h-4 after:w-4 after:transition-all dark:border-gray-600
            peer-checked:bg-pink-400"
            />
          </label>

          {!isDarkMode ? <Moon /> : <Sun />}
        </div>
      </div>
    </header>
  )
}

export default Header
