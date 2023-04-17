import React from 'react'
import useWord from '../hooks/useWord'
import { useNavigate } from 'react-router-dom'

const SynonymsSection = ({ synonyms }) => {
  const { apiFetch } = useWord()
  const navigate = useNavigate()
  const firstFiveSynonyms = synonyms.slice(0, 5)

  const handleSynonym = (synonym) => {
    apiFetch(synonym)
    navigate(`/${synonym}`)
    window.scrollTo(0, 0)
  }
  return (
    <div className='flex flex-wrap items-end gap-3 my-3 '>
      <h3 className='text-xl text-gray-500 border-b-2 border-transparent dark:text-gray-400'>
        Synonyms
      </h3>
      {firstFiveSynonyms.map((synonym, index) => (
        <strong
          key={index}
          className='font-bold text-pink-600 border-b-2 border-transparent cursor-pointer sm:text-xl hover:border-current'
          onClick={() => handleSynonym(synonym)}
        >
          {synonym}
        </strong>
      ))}
    </div>
  )
}

export default SynonymsSection
