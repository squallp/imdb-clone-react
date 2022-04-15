
import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import {API_KEY, API_URL, MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH} from '../route';
import {useSelector} from "react-redux";



function FavMovies() {
  const [favMoviesData, setFavMoviesData] = useState([]);
  let favMovies = useSelector((state) => state.favorites.value);
  let languageRes = useSelector((state) => state.language.value);
  let preState = [];

  useEffect(() => {
    getFavMovies();  
  }, [favMovies,languageRes]);  

  function getFavMovies() {
   setFavMoviesData([]);
   favMovies.map((movieID, index) => {
    const fetchUrl = API_URL+MOVIE_URL_PATH+movieID+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+languageRes;
    fetch(fetchUrl)
    .then((res) => res.json())
    .then((res) => {
      preState.push(res);
      setFavMoviesData([...preState]);
    })
  });
 }

 return (
  <>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
  {favMoviesData.length > 0 ? favMoviesData.map((movie, index) => {
    return (
      <div key={index} className="col">
      <Movie key={index} id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average}/>
      </div>
      );

  }) : <p className="nomovie"> There are no favorite movies </p> }
  </div>
  </>
  );
}

export default FavMovies;
