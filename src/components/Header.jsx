import React from 'react'
import Moon from './Icons/Moon'
import Book from './Icons/Book'

const Header = () => {
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
          <label class='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' value='' class='sr-only peer ' />
            <div class="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-pink-400" />
          </label>

          <Moon />
        </div>
      </div>
    </header>
  )
}

export default Header
