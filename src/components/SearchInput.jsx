import React from 'react'
import Search from './Icons/Search'

const SearchInput = () => {
  return (
    <form className='bg-slate-200 p-2.5 rounded-2xl w-full'>
      <label htmlFor='search-input' className='flex items-center gap-2 pl-2'>
        <input
          type='text'
          id='search-input'
          className='w-full font-bold bg-slate-200 focus:outline-none'
        />
        <button type='submit' className='inline pr-2 '>
          <Search />
        </button>
      </label>
    </form>
  )
}

export default SearchInput
