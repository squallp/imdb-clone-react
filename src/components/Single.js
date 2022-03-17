
import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH} from '../route';
import Movie from './Movie';

function Single(props) {
  const [moviesData, setMoviesData] = useState();
  const movieIDmodal = "modalInfo"+props.id;

  useEffect(() => {
    getSingleMovie(props.id);
  }, []);

  function getSingleMovie(id) {
    const fetchUrl = API_URL+MOVIE_URL_PATH+id+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH;
    //console.log(fetchUrl);

    if (id) {
      fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => {
        setMoviesData(res);
      })
    }
  }
  return (
    <React.Fragment>
    <div className="modal fade" id={movieIDmodal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
    {moviesData ? <Movie modal="yes" key={moviesData.id} title={moviesData.original_title} genres={moviesData.genres} budget={moviesData.budget} revenue={moviesData.revenue} production_companies={moviesData.production_companies} tagline={moviesData.tagline} backdrop_path={moviesData.backdrop_path} release_date={moviesData.release_date} poster_path={moviesData.poster_path} overview={moviesData.overview} vote_average={moviesData.vote_average}/>
    : <p> Nema nista </p> }
    <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
    );
}

export default Single;


