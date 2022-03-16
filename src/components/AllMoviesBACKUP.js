
import React, {useEffect, useState} from 'react';
import Movie from './Movie';
const apiKey = "d2a0254b95df776fafb330229c4279d0";
const apiUrl = "https://api.themoviedb.org/3/";
const authentication = "authentication/guest_session/new?api_key=";
const movieUrlPath = "movie/";
const popularUrlPath = "popular";
const apiKeyUrlPath = "?api_key=";
const languageUrlPath = "&language=en-US";
const pageUrlPath = "&page=1";
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1


function PopularMovies() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState();
    const [moviesData, setMoviesData] = useState();
    
useEffect(() => {
    getAllMovies();
  }, []);


useEffect(() => {
    getSessionId();
  }, []);

useEffect(() => {
    if (typeof(sessionId) !== 'undefined') {
          console.log("sessionId: "+sessionId);
          setIsLoaded(true);
        }

    
  }, [isLoading]);


    const getSessionId = () => {
     fetch(apiUrl+authentication+apiKey)
      .then((res) => res.json())
      .then((res) => {
          setSessionId(res.guest_session_id);
          setIsLoading(true);
      })
  }
  

  function getAllMovies() {
    
    fetch(apiUrl+movieUrlPath+popularUrlPath+apiKeyUrlPath+apiKey+languageUrlPath+pageUrlPath)
      .then((res) => res.json())
      .then((res) => {
        setMoviesData(res.results);
      })
  }
  return (
    <div className="row row-cols-md-4">
    {moviesData ? moviesData.map((movie, index) => {
      const overviewTrimmed = movie.overview.substring(0, 140)+"...";
        return (
          <div className="col">
          <Movie key={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={overviewTrimmed} vote_average={movie.vote_average}/>
          </div>
        );
      }) : <p> Nema nista </p> }
    </div>
// {"adult":false,
// "backdrop_path":"/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
// "genre_ids":[28,12,878],"id":634649,"original_language":"en",
// "original_title":"Spider-Man: No Way Home",
// "overview":"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
// "popularity":7537.253,"poster_path":"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
// "release_date":"2021-12-15","title":"Spider-Man: No Way Home",
// "video":false,
// "vote_average":8.3,"vote_count":9319}
  );
}

export default PopularMovies;
