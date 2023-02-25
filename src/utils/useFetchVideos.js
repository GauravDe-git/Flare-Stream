import { useState,useEffect } from "react";
import { API_KEY,YOUTUBE_API_BASE_URL } from "./Constants";

const useFetchVideos = (categoryID) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const getApi = async () => {
            const data = await fetch(`${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryID}&key=${API_KEY}`);
            const json = await data.json();
            setVideos(json.items);
        };
        getApi();
    },[categoryID]);

    return videos;
};

export default useFetchVideos;