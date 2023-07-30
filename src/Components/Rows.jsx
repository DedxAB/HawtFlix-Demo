import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Rows = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 1000
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft= slider.scrollLeft + 1000
  }

  return (
    <>
      <h2 className="text-white p-4 font-bold md: text-xl ">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft onClick={slideLeft} className="bg-white opacity-20 hover:opacity-80 absolute left-0 rounded-full z-10 hidden group-hover:block cursor-pointer" size={30}/>
        <div
          id={"slider" + rowId}
          className="h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => {
            return <Movie key={id} item={item} />;
          })}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white opacity-20 hover:opacity-80 absolute right-0 rounded-full z-10 hidden group-hover:block cursor-pointer" size={30}/>
      </div>
    </>
  );
};
