import React from 'react'

const Card = (props) => {
  return (
    <div className='text-black text-sm font-lex border h-20 w-20'>{props.day}</div>
  )
}

export default Card