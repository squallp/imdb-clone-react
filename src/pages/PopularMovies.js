import Navigation from '../components/Navigation';
import Movies from '../components/Movies';
// import Single from '../components/Single';
import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, AUTH_PATH, MOVIE_URL_PATH, POPULAR_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH, PAGINATION_URL_PATH} from '../route';
const fetchUrl = API_URL+MOVIE_URL_PATH+POPULAR_URL_PATH+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+PAGINATION_URL_PATH;

function PopularMovies() {
	const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState();

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

<React.Fragment>{/* Ovaj ovdje fragment  mora ici jer je to neko react pravilo da komponente budu wrapovane div-om ili njim */}
<Navigation />

<div className="container-fluid">
<div>


<Movies fetchUrl={fetchUrl}/>




</div>
</div>
</React.Fragment>
);
}

export default PopularMovies;
