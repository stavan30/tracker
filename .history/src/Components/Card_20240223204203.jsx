import React from 'react'
import {NavLink} from 'react-router-dom'

const Card = ({day}) => {
  return (
    <NavLink to={`/${day.toLowerCase().split(' ').join('-')}`}> 
    <div className='flex items-center justify-center text-black text-lg font-lex border-2 border-black rounded h-40 w-40 text-center'>
        <h1>{day.toUpperCase()}</h1>
    </div>
    </NavLink>
  )
}

export default Card