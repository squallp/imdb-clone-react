
import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import {API_KEY, API_URL, MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH} from '../route';
import {useSelector} from "react-redux";



function FavMovies() {
  const [favMoviesData, setFavMoviesData] = useState([]);
  const favMovies = useSelector((state) => state.favorites.value);
  let preState = [];

  useEffect(() => {
     getFavMovies();   
  }, []);


function getFavMovies() {
   if (favMovies.length > 0) {
    
     favMovies.map((movieID, index) => {
      const fetchUrl = API_URL+MOVIE_URL_PATH+movieID+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH;
      fetch(fetchUrl)
       .then((res) => res.json())
       .then((res) => {
        preState.push(res);
        setFavMoviesData([...favMoviesData,...preState]);
      })
    });
   } else {
    
  }
}


return (
  <React.Fragment>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
  {favMoviesData.length > 0 ? favMoviesData.map((movie, index) => {
    return (
      <div key={index} className="col">
       <Movie key={index} id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average}/>
      </div>
      );

    }) : <p> There are no movies </p> }
    </div>
    </React.Fragment>
    );
  }

  export default FavMovies;
