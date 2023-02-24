import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className='grid grid-flow-col pt-16 md:pt-10'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body