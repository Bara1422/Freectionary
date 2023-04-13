import React from 'react'

const NoData = ({ word }) => {
  return (
    <div className='flex flex-col items-center gap-4 mt-4'>
      <h2 className='text-3xl font-bold'>Error!</h2>
      <h3 className='text-2xl font-bold'>
        The word <span className='underline decoration-pink-500'>{word}</span>{' '}
        was not found
      </h3>
      <p className='text-l'>Please write a valid word </p>
    </div>
  )
}

export default NoData
