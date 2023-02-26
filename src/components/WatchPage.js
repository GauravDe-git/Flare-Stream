import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      <div className="col-span-7 md:col-span-9">
        <iframe
          className="w-full h-[5%] md:h-[10%]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-span-5 md:col-span-3">
        <div className="flex flex-col gap-2 p-4 rounded-lg shadow-lg bg-white">
          <h1 className="text-lg font-bold">Popular Videos</h1>
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
