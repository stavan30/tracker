import React from 'react'

const Card = (props) => {
  return (
    <div className='text-black text-sm font-lex border h-40 w-40'>{props.day}</div>
  )
}

export default Card