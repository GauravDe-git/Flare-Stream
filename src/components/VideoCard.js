import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 shadow-lg max-w-[20rem]'>
        <img className='rounded-lg w-[24rem]' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold text-xl'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard