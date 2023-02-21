import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {

  const toggleSidebar = useSelector((store)=>store.sidebar.isMenuOpen)

  if (!toggleSidebar) return null;

  return (
    <aside className='p-2 bg-gray-50 w-[15rem] max-w-[20rem] shadow-md col-span-1 h-fit'>
        <ul className='flex flex-col justify-evenly space-y-3'>
            <li className='text-lg p-2 font-bold'>Explore</li>
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
    </aside>
  )
}

export default Sidebar