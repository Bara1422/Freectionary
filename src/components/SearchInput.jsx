import React, { useState } from 'react'
import Search from './Icons/Search'

const SearchInput = ({ apiFetch, setCurrentWord }) => {
  const [inputWord, setInputWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    apiFetch(inputWord)
    setCurrentWord(inputWord)
    setInputWord('')
  }

  return (
    <form
      className='bg-slate-200 dark:bg-gray-700 p-2.5 rounded-2xl w-full'
      onSubmit={handleSubmit}
    >
      <label htmlFor='search-input' className='flex items-center gap-2 pl-2'>
        <input
          type='text'
          autoComplete='off'
          required
          id='search-input'
          placeholder='Type here...'
          className='w-full font-bold bg-slate-200 dark:bg-gray-700 dark:text-white focus:outline-none'
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value.trim())}
        />
        <button type='submit' className='inline pr-2 '>
          <Search />
        </button>
      </label>
    </form>
  )
}

export default SearchInput
