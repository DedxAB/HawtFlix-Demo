import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import requests from "./Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

    console.log(movie);
  const trancateString = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-tr from-black absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[25%] md:top-[29%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.name}</h1>
          <div className="my-4">
            <button className="border border-gray-300 text-black bg-white px-5 py-2">
              Play
            </button>
            <button className="border border-gray-400 cursor-pointer px-5 py-2 ml-4 text-white">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Media Type : {movie?.media_type ? movie?.media_type : "Movie"}
          </p>
          <p className="text-gray-400 text-sm">
            Released : {movie?.release_date ? movie?.release_date : "N/A"}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[38%] text-gray-200">
            {trancateString(movie?.overview, 270)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
