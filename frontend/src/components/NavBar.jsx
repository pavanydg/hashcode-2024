import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute '>
        <nav className='flex justify-between items-center max-container '>
        <div className='hover:cursor-pointer text-white pl-2'>
            RentGPU
        </div>
        <div className='flex-1 flex justify-center items-center gap-16 hover:cursor-pointer text-white'>
            <Link to="/">HOME</Link>
            <div>MARKETPLACE</div>
            <div>RENT</div>
        </div>
        <div className='pr-2 flex gap-2'>   
        <Link className='hover:cursor-pointer
                bg-purple-500 rounded-md p-1.5 
            ' to='/signin'>
            SignIn
        </Link>
        <Link className='hover:cursor-pointer
                bg-purple-500 rounded-md p-1.5 
            ' to='/signup'>
            SignUp
        </Link>
        </div>
        </nav>
    </header>
  )
}

export default NavBar