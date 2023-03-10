import React from 'react';
import { useSelector } from 'react-redux';
import { Compass, FolderPlus, ThumbsUp, Eye, Clock } from 'react-feather';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isUserLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const toggleSidebar = useSelector((store) => store.sidebar.isMenuOpen);

  if (!toggleSidebar) return null;

  return (
    <aside className='p-2 mt-4 bg-gray-50 w-fit h-3/4 shadow-md col-span-1 fixed top-14 left-0'>
      <ul className='flex flex-col justify-center items-center space-y-3'>
        <Link to='/'>
          <li className='text-lg p-2 flex flex-col justify-center items-center'>
            <Compass /> Explore
          </li>
        </Link>
        <li className='text-lg p-2 flex flex-col justify-center items-center text-gray-500'>
          <FolderPlus color='gray'/> Playlists
        </li>
        {isUserLoggedIn ? (
          <Link to='/likedVideos'>
            <li className='text-lg p-2 flex flex-col justify-center items-center'>
              <ThumbsUp /> Liked
            </li>
          </Link>
        ) : (
          <li
            className='text-lg p-2 flex flex-col justify-center items-center cursor-pointer'
            onClick={() => alert('Please login to access your Liked Videos')}>
            <ThumbsUp /> Liked
          </li>
        )}
        <li className='text-lg p-2 flex flex-col justify-center items-center text-gray-500'>
          <Eye color='gray' /> Watch Later
        </li>
        <li className='text-lg p-2 flex flex-col justify-center items-center text-gray-500'>
          <Clock color='gray'/> History
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
