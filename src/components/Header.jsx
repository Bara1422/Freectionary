import React, { useCallback } from 'react'
import Book from './Icons/Book'
import SelectedFont from './SelectedFont'
import DarkModeSection from './DarkModeSection'
import useFontChange from '../hooks/useFontChange'

const Header = ({ handleFont }) => {
  const [setSelectedFont] = useFontChange('sans')

  const handleSelect = useCallback(
    (e) => {
      const selectedValue = e.target.value
      handleFont(selectedValue)
      setSelectedFont(selectedValue)
    },
    [handleFont, setSelectedFont]
  )

  return (
    <header className='container flex justify-between'>
      <h2 className='text-2xl font-bold'>
        <Book />
      </h2>
      <div className='flex gap-3 divide-x-2'>
        <SelectedFont handleSelect={handleSelect} />
        <DarkModeSection />
      </div>
    </header>
  )
}

export default Header
