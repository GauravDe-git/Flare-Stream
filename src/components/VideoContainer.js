import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [loadVideos,SetLoadVideos] = useState([]);

    useEffect(()=>{
        getAPI();
    },[])

    const getAPI = async () => {
        const data = await fetch(YOUTUBE_API);
        const json= await data.json();
        SetLoadVideos(json.items);
    }


  return (
    <div className='flex flex-wrap gap-4'>
      {loadVideos.map((videos)=><VideoCard key={videos.id} info = {videos}/> )}
    </div>
  )
}

export default VideoContainer