
import React, {useEffect, useState} from 'react';
import Movie from './Movie';

function Movies(props) {
    const [moviesData, setMoviesData] = useState();
    const [moviesPage, setMoviesPage] = useState(1);
    
useEffect(() => {
  getAllMovies();
  }, []);

useEffect(() => {
  getAllMovies();
  }, [moviesPage]);

function pageUp() {
  setMoviesPage(moviesPage + 1);
}

function pageDown() {
  if (moviesPage>1) {
      setMoviesPage(moviesPage - 1)
  }
}


  function getAllMovies() {
    
    fetch(props.fetchUrl+moviesPage)
      .then((res) => res.json())
      .then((res) => {
        setMoviesData(res.results);
      })
  }

  return (
    <React.Fragment>
    <div className="row row-cols-3 page">
    <div className="col">
    <button onClick={pageDown} type="button" className="btn btn-danger">Prev page</button>
    </div>
    <div className="col">
    <p>Page: {moviesPage}</p>
    </div>
    <div className="col">
    <button onClick={pageUp} type="button" className="btn btn-danger">Next page</button>
    </div>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
    {moviesData ? moviesData.map((movie, index) => {
      const overviewTrimmed = movie.overview.substring(0, 140)+"...";
        return (
          <div key={index} className="col">
          <Movie key={index} id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={overviewTrimmed} vote_average={movie.vote_average}/>
          </div>
        );
      }) : <p> There is no movie </p> }
    </div>

    <div className="row row-cols-md-3 page">
    <div className="col">
    <button onClick={pageDown} type="button" className="btn btn-danger">Prev page</button>
    </div>
    <div className="col">
    <p>Page: {moviesPage}</p>
    </div>
    <div className="col">
    <button onClick={pageUp} type="button" className="btn btn-danger">Next page</button>
    </div>
    </div>
</React.Fragment>
  );
}

export default Movies;
