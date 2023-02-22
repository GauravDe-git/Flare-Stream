import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_API_BASE_URL } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [loadVideos, SetLoadVideos] = useState([]);
  const { selectedCategoryID } = useSelector((state) => state.categories);

  useEffect(() => {
    getAPI();
  }, [selectedCategoryID]);

  const getAPI = async () => {
    const data = await fetch(
      `${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${selectedCategoryID}&key=${API_KEY}`
    );
    const json = await data.json();
    SetLoadVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {loadVideos.map((videos) => (
        <Link to= {"watch?v=" + videos.id}>
        <VideoCard key={videos.id} info={videos}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
