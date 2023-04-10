import React from 'react'
import Search from './Icons/Search'

const SearchInput = () => {
  return (
    <form className='bg-slate-200 p-2 rounded-xl w-full '>
      <label htmlFor='search-input' className='flex items-center gap-2 pl-2'>
        <input
          placeholder='hola'
          type='text'
          id='search-input'
          className='bg-slate-200 w-full'
        />
        <button type='submit' className='inline'>
          <Search />
        </button>
      </label>
    </form>
  )
}

export default SearchInput
