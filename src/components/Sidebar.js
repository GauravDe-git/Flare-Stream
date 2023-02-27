import React from 'react'
import { useSelector } from 'react-redux'
import {Compass,FolderPlus,ThumbsUp,Eye,Clock} from 'react-feather'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const toggleSidebar = useSelector((store)=>store.sidebar.isMenuOpen)

  if (!toggleSidebar) return null;

  return (
    <aside className='p-2 mt-4 bg-gray-50 w-fit h-3/4 shadow-md col-span-1 fixed top-14 left-0'>
        <ul className='flex flex-col justify-center items-center space-y-3'>
            <Link to="/"><li className='text-lg p-2 flex flex-col justify-center items-center'><Compass/> Explore</li></Link> 
            <li className='text-lg p-2 flex flex-col justify-center items-center'><FolderPlus/> Playlists</li>
            <li className='text-lg p-2 flex flex-col justify-center items-center'><ThumbsUp/> Liked</li>
            <li className='text-lg p-2 flex flex-col justify-center items-center'><Eye/> Watch Later</li>
            <li className='text-lg p-2 flex flex-col justify-center items-center'><Clock/> History</li>
        </ul>
    </aside>
  )
}

export default Sidebar