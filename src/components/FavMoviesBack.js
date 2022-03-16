
import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import {API_KEY, API_URL, MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH} from '../route';
import {useSelector} from "react-redux";
import axios from "axios";
axios.defaults.timeout = 500;


function FavMovies() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let favMovies = useSelector((state) => state.favorites.value);

  useEffect(() => {
    getFavMovies();
  }, []);



function getFavMovies() {
    
    if (favMovies.length > 0) {
     const preState = [];
     favMovies.map((movieID, index) => {
      const fetchUrl = API_URL+MOVIE_URL_PATH+movieID+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH;
      fetch(fetchUrl)
       .then((res) => res.json())
       .then((res) => {
        let item = {
          id: res.id,
          original_title: res.original_title,
          poster_path: res.poster_path,
          overview: res.overview,
          release_date: res.release_date,
          backdrop_path: res.backdrop_path,
          poster_path: res.poster_path,
          vote_average: res.vote_average
        }
         preState.push(item);
      })
    });
    setMoviesData(preState);
     console.log("PS>"+preState);
    
   } else {
    console.log("nema ga");
  }
  setIsLoaded(true);
  console.log("MD>"+moviesData);
}

return (
  <React.Fragment>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
  {moviesData ? moviesData.map((movie, index) => {
    const overviewTrimmed = movie.overview.substring(0, 140)+"...";
    return (
      <div key={index} className="col">
      <Movie key={index} id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average}/>
      </div>
      );
    }) : <p> There is no movie </p> }
    </div>
    </React.Fragment>
    );
  }

  export default FavMovies;
