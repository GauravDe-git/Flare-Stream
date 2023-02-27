import React, { useState } from "react";
import { addLikedVideo } from "../utils/likedVideosSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Heart } from "react-feather";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [liked, setIsLiked] = useState(false);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    if (!liked && !isLoggedIn) {
      alert('Please login to like videos!');
    } else if (!liked && isLoggedIn) {
      setIsLiked(true);
      dispatch(addLikedVideo(info));
      alert('Added to Liked Videos!');
    } else {
      setIsLiked(true);
    }
  };

  return (
    <>
      <Link to={"/watch?v=" + info.id}>
        <div className="p-2 m-2 shadow-lg max-w-[18rem] h-full flex flex-col">
          <img
            className="rounded-lg w-[24rem] object-cover object-center"
            src={thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className="flex-1 flex flex-col justify-between">
            <div className="overflow-hidden h-20">
              <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
              <span className="text-gray-500 text-sm">{channelTitle}</span>
            </div>
            <span className="text-gray-500 text-sm ml-2">
              {statistics.viewCount} views
            </span>
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-center">
      <button
        className={`text-gray-500 hover:text-red-500 transition-colors ${
          liked ? "text-red-500" : ""
        }`}
        onClick={handleLikeClick}
      >
        <Heart className="w-5 h-5" />
      </button>
      </div>
      
    </>
  );
};

export default VideoCard;
