import React from 'react'

const SelectedFont = ({ handleSelect }) => {
  return (
    <select
      name='font'
      id='font'
      className='dark:bg-slate-800 bg-[#f5f5f5]'
      onChange={handleSelect}
      defaultChecked='sans'
    >
      <option value='sans'>Sans</option>
      <option value='serif'>Serif</option>
      <option value='monospace'>MonoSpace</option>
      <option value='roboto'>Roboto</option>
      <option value='merriweather'>Merriweather</option>
      <option value='oswald'>Oswald</option>
    </select>
  )
}

export default SelectedFont
