import React from 'react';
import { useSelector } from 'react-redux';

const LikedVideos = () => {
  const likedVideos = useSelector(store => store.likedVideos);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto p-8">
        <h1 className='text-2xl font-bold mb-3'>Liked Videos</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {likedVideos.map(video => (
            <div key={video.id} className="flex flex-col">
              <div className="flex-grow mb-2">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-sm font-medium">{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedVideos;
