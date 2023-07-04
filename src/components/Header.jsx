import React, { useCallback } from 'react'
import Book from './Icons/Book'
import SelectedFont from './SelectedFont'
import DarkModeSection from './DarkModeSection'
import useFontChange from '../hooks/useFontChange'
import { useNavigate } from 'react-router-dom'

const Header = ({ handleFont }) => {
  const [setSelectedFont] = useFontChange('sans')
  const navigate = useNavigate()

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
      <button onClick={() => navigate('/')} className='text-2xl font-bold'>
        <Book />
      </button>
      <div className='flex gap-3 divide-x-2'>
        <SelectedFont handleSelect={handleSelect} />
        <DarkModeSection />
      </div>
    </header>
  )
}

export default Header
