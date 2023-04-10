import React from 'react'
import Play from './Icons/Play'

const ResultWord = () => {
  return (
    <div className='container flex justify-between items-center'>
      <div className='flex  items-center w-full justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>keyboard</h1>
          <p className='text-pink-300 text-xl'>/'ki:bc:d/</p>
        </div>
        <button className='mr-4 w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center'>
          <Play />
        </button>
      </div>
    </div>
  )
}

export default ResultWord
