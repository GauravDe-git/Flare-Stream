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
    <header className='flex  bg-gray-50 shadow-lg'>
        <img className='w-7 h-8 mx-2 my-3 cursor-pointer hover:bg-gray-300' src={Hamburger} alt="hamburger" onClick={sideBarHandler} />
        <div className='font-bold text-lg m-4'>
            <span className='text-blue-700'>Flare</span>Stream
        </div>
        <div className='ml-auto my-4'>
        <input className='p-1.5 border-2 border-gray-200 border-solid' type="search" name="search"  />
        <button className='p-2 hover:bg-gray-300'>Search</button>
        </div>
        
        <button className='ml-auto mr-2 my-3 px-3 py-1.5  bg-blue-400 text-white font-bold'>
            Login
        </button>
        
    </header>
  )
}

export default Header