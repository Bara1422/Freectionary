import React, { useEffect, useState } from 'react'
import Moon from './Icons/Moon'
import Book from './Icons/Book'
import Sun from './Icons/Sun'

const Header = ({ handleFont }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedFont, setSelectedFont] = useState('serif')
  const [preferredTheme, setPreferredTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
  }

  const handleSelect = (e) => {
    const selectedValue = e.target.value
    setSelectedFont(selectedValue)
    handleFont(selectedValue)
    console.log(selectedValue)
  }

  useEffect(() => {
    const rootElement = document.documentElement
    rootElement.classList.remove(
      'font-sans',
      'font-serif',
      'font-monospace',
      'font-roboto',
      'font-merriweather',
      'font-oswald'
    )
    rootElement.classList.add(`font-${selectedFont}`)
  }, [selectedFont])

  // DARK

  useEffect(() => {
    const preferredThemeQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    setPreferredTheme(preferredThemeQuery.matches ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const rootElement = document.documentElement
    rootElement.classList.toggle('dark', preferredTheme === 'dark')
    setIsDarkMode(!isDarkMode)
  }, [preferredTheme])

  console.log(isDarkMode)
  // END DARK

  return (
    <header className='container flex justify-between'>
      <h2 className='text-2xl font-bold'>
        <Book />
      </h2>
      <div className='flex gap-3 divide-x-2'>
        <select
          name='font'
          id='font'
          className='dark:bg-slate-800'
          onChange={handleSelect}
        >
          <option value='sans'>Sans</option>
          <option value='serif'>Serif</option>
          <option value='monospace'>MonoSpace</option>
          <option value='roboto'>Roboto</option>
          <option value='merriweather'>Merriweather</option>
          <option value='oswald'>Oswald</option>
        </select>
        <div className='flex gap-3 pl-3'>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              checked={isDarkMode}
              value=''
              className={`sr-only peer ${
                preferredTheme === 'dark' ? 'peer-checked' : ''
              }`}
              onChange={handleDarkMode}
            />
            <div
              className="w-11 h-5 bg-gray-500 peer-focus:outline peer-checked
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
