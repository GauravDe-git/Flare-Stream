import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 shadow-lg max-w-[18rem] h-full flex flex-col'>
        <img className='rounded-lg w-[24rem] object-cover object-center' src={thumbnails.medium.url} alt="thumbnail" />
        <div className="flex-1 flex flex-col justify-between">
            <div className="overflow-hidden h-20">
                <h3 className='font-bold text-lg line-clamp-2'>{title}</h3>
                <span className="text-gray-500 text-sm">{channelTitle}</span>
            </div>
            <span className="text-gray-500 text-sm">{statistics.viewCount} views</span>
        </div>
    </div>
  )
}

export default VideoCard