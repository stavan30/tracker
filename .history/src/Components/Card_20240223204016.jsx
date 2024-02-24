import React from 'react'

const Card = ({day}) => {
  return (
    <div className='flex items-center justify-center text-black text-lg font-lex border-2 border-black rounded h-40 w-40 text-center'>
        <h1>{day.toUpperCase()}</h1>
    </div>
  )
}

export default Card