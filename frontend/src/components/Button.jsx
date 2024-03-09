import React from 'react'

const Button = ({but}) => {
  return (
    <div className='hover:cursor-pointer
                bg-purple-500 rounded-md p-1.5 
            '>{but}</div>
  )
}

export default Button