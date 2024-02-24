import React from 'react'

const Card = (props) => {
  return (
    <div className='text-black text-lg font-lex border h-40 w-40 text-center flex items-center justify-center'>{props.day}</div>
  )
}

export default Card