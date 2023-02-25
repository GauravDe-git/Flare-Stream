import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetchVideos from "../utils/useFetchVideos";

const VideoContainer = () => {

  const { selectedCategoryID } = useSelector((state) => state.categories);
  const videos = useFetchVideos(selectedCategoryID);

  return (
    <div className="flex flex-wrap gap-4">
      {videos.map((videosArr) => (
        <Link to= {"watch?v=" + videosArr.id} key={videosArr.id} >
        <VideoCard info={videosArr}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
