import React,{useState,useEffect} from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API_BASE_URL,API_KEY,SURFING_API } from "../utils/Constants";
import SearchVideoCard from "./SearchVideoCard";

const VideoContainer = () => {

  const { selectedCategoryID } = useSelector((state) => state.categories);
  const { searchQuery, isSearched } = useSelector((store) => store.results)

  const [isCalled,setIsCalled] = useState(false);

  const [videos, setVideos] = useState([]);
  const[resultVideos, setResultVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        `${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${selectedCategoryID}&key=${API_KEY}`
      );
      const json = await data.json();
      setVideos(json.items);
    };

    const searchedVideos = async () => {
      const data = await fetch(SURFING_API + searchQuery);
      const json = await data.json();
      setResultVideos(json.items);
      console.log(json.items);
      setIsCalled(true);
    }

    isSearched ? searchedVideos() : getVideos();
  }, [selectedCategoryID, isSearched, searchQuery]);

  if (isCalled){
    return(
      <div className="flex flex-wrap gap-4">
        {resultVideos.map((resultVid)=>(
          <Link to={"/watch?v=" + resultVid.id.videoId}>
            <SearchVideoCard key={resultVid.id.videoId} video={resultVid}/>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-4">
      {videos.map((videosArr) => (
        
        <VideoCard key={videosArr.id} info={videosArr}/>
        
      ))}
    </div>
  );
};

export default VideoContainer;
