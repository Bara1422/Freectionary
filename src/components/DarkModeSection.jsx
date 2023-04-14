import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import Moon from './Icons/Moon'
import Sun from './Icons/Sun'

const DarkModeSection = () => {
  const [isDarkMode, handleDarkMode, preferredTheme] = useDarkMode()
  return (
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
  )
}

export default DarkModeSection
