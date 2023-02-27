import React from "react";

const SearchVideoCard = ({ video }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div>
      <div className="p-2 m-2 shadow-lg w-[18rem] h-full flex flex-col">
        <img className="rounded-lg w-[24rem] object-cover object-center" src={thumbnails.medium.url} alt={title} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SearchVideoCard;
