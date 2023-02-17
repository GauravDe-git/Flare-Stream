import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {

  const toggleSidebar = useSelector((store)=>store.sidebar.isMenuOpen)

  if (!toggleSidebar) return null;

  return (
    <div className='p-2 bg-gray-50 max-w-[12rem] shadow-md'>
        <h1 className='text-lg p-2 font-bold'>Explore</h1>
        <ul className='flex flex-col justify-evenly'>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
        </ul>
    </div>
  )
}

export default Sidebar