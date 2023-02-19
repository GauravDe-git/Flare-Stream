import React, { useState } from 'react'
import ButtonList from "./ButtonList"
import VideoContainer from './VideoContainer'

const MainContainer = () => {

  const [category,SetCategory] = useState(0);
  function manageCategory(id){
    SetCategory(id)
  }

  return (
    <div className='col-span-11'>
      <ButtonList manageCategory={manageCategory}/>
      <VideoContainer category={category}/>
    </div>
  )
}

export default MainContainer