import React, { useState } from 'react'
import Search from './Icons/Search'
import { useNavigate } from 'react-router-dom'

const SearchInput = ({ apiFetch }) => {
  const [inputWord, setInputWord] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    apiFetch(inputWord)
    navigate(`/${inputWord}`)
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
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button type='submit' className='inline pr-2 '>
          <Search />
        </button>
      </label>
    </form>
  )
}

export default SearchInput
