import React from 'react'

const Card = (props) => {
  return (
    <div className='flex items-center justify-center text-black text-lg font-lex border-2 border-black rounded h-40 w-40 text-center hover: opacity-80'>
        <h1>{props.day}</h1>
    </div>
  )
}

export default Card