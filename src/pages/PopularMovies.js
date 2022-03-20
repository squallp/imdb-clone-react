import Navigation from '../components/Navigation';
import Movies from '../components/Movies';
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {API_KEY, API_URL, AUTH_PATH, MOVIE_URL_PATH, POPULAR_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH, PAGINATION_URL_PATH} from '../route';


function PopularMovies() {
	const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState();
    let languageRes = useSelector((state) => state.language.value);
    let fetchUrl = API_URL+MOVIE_URL_PATH+POPULAR_URL_PATH+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+languageRes+PAGINATION_URL_PATH;

	useEffect(() => {
		getSessionId();
	}, []);

	useEffect(() => {
    if (typeof(sessionId) !== 'undefined') {
          setIsLoaded(true);
        }

    
  }, [isLoading]);

	const getSessionId = () => {
		fetch(API_URL+AUTH_PATH+API_KEY)
		.then((res) => res.json())
		.then((res) => {
			setSessionId(res.guest_session_id);
			setIsLoading(true);
		})
	}

	return (

<>
<Navigation />

<div className="container-fluid">
<div>


<Movies fetchUrl={fetchUrl}/>




</div>
</div>
</>
);
}

export default PopularMovies;
