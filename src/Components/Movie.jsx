import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [likes, setLikes] = useState(false);

  return (
    <>
      <div className="w-80 md:w-96  inline-block cursor-pointer relative p-4">
        <img
          className="h-auto rounded"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title}
        />
        <div className="absolute p-4 flex justify-center items-center top-0 left-0 w-full h-full hover:bg-black opacity-0 hover:opacity-80 text-white  ">
          <p className="text-xs md:text-sm font-bold">
            {item?.title ? item?.title : item?.name}
          </p>
          <p>
            {likes ? (
              <FaHeart className="absolute top-8 right-8" />
            ) : (
              <FaRegHeart className="absolute top-8 right-8" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
