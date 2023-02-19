import React, { useEffect, useState } from 'react'
import { API_KEY,YOUTUBE_API_BASE_URL } from '../utils/Constants';
import VideoCard from './VideoCard';

const VideoContainer = ({category}) => {

    const [loadVideos,SetLoadVideos] = useState([]);

    useEffect(()=>{
        getAPI();
    },[category])

    const getAPI = async () => {
        const data = await fetch(`${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
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

