import React from 'react'

const Card = (props) => {
  return (
    <div className='flex items-center justify-center text-black text-lg font-lex border h-40 w-40 text-center '>{props.day}</div>
  )
}

export default Card