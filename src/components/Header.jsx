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
        <select name='font' id='font'>
          <option value='Serif'>Serif</option>
          <option value='Roboto'>Roboto</option>
        </select>
        <div className='flex pl-3'>
          <label htmlFor='darkMode' />
          <input
            type='checkbox'
            min='1'
            max='2'
            value='1'
            id='darkMode'
            className='w-10 '
          />
          <Moon />
        </div>
      </div>
    </header>
  )
}

export default Header
