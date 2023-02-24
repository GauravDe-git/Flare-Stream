import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="col-span-11 mt-4">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
