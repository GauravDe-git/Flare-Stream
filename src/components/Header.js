import React from 'react'
import { useDispatch } from 'react-redux'
import Hamburger from "../assets/hamburger.png"
import { toggleMenu } from '../utils/sideBarSlice';

const Header = () => {

    const dispatch = useDispatch();

    const sideBarHandler = () =>{
        dispatch(toggleMenu())
    };

  return (
    <header>
        <nav className='flex  bg-gray-50 shadow-md max-lg:min-w-[56rem]'>
        <img className='w-7 h-8 mx-2 my-3 cursor-pointer hover:bg-gray-300' src={Hamburger} alt="hamburger" onClick={sideBarHandler} />
        <div className='font-bold text-lg m-4'>
            <span className='text-blue-700'>Flare</span>Stream
        </div>
        <div className='ml-auto my-4'>
        <input className=' border-2 border-gray-200 border-solid max-w-[7rem] md:max-w-[18rem]' type="search" name="search"  />
        <button className='md:p-2 hover:bg-gray-300'>Search</button>
        </div>
        
        <button className='ml-auto mr-3 my-4 px-3 py-1 rounded-md bg-blue-500 text-white font-bold'>
            Login
        </button>
        
    </nav>
    </header>
    
  )
}

export default Header