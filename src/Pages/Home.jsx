import React from "react";
import Main from "../Components/Main";
import {Rows}  from "../Components/Rows";
import requests from "../Components/Request";
export const Home = () => {
  return (
    <>
          <Main />
          <Rows rowId = '1' title='Trending' fetchURL={requests.requestTrending } />
          <Rows rowId = '2' title='Top Rated' fetchURL={requests.requestTopRated } />
          <Rows rowId = '3' title='Popular' fetchURL={requests.requestPopular } />
          <Rows rowId = '4' title='Now Playing' fetchURL={requests.requestNowPlaying } />
          {/* < rowId = '1'Rows title='Latest' fetchURL={requests.requestLatest } /> */}
          <Rows rowId = '5' title='Horror' fetchURL={requests.requestHorror } />
          <Rows rowId = '6' title='Upcoming' fetchURL={requests.requestUpcoming } />
    </>
  );
};
