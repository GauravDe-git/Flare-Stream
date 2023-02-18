import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-4 py-2 m-2 bg-gray-200 cursor-pointer rounded-xl'>{name}</div>
  )
}

export default Button