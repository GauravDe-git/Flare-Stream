import React, { useState } from 'react'
import ButtonList from "./ButtonList"
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const toggleSidebar = useSelector((store) => store.sidebar.isMenuOpen)
  const marginLeftStyle = toggleSidebar ? 'md:ml-48' : 'ml-0'

  return (
    <div className={`col-span-11 ${marginLeftStyle}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer