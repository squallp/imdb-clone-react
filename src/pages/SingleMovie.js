import Navigation from '../components/Navigation';
import Single from '../components/Single';
import Movies from '../components/Movies';
import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, AUTH_PATH, MOVIE_URL_PATH, POPULAR_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH, PAGINATION_URL_PATH} from '../route';
const fetchUrl = API_URL+MOVIE_URL_PATH+POPULAR_URL_PATH+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+PAGINATION_URL_PATH;

function SingleMovie() {


	return (

<>

<Navigation />

<div className="container-fluid">
<Single id="634649"/>

</div>
</>
);
}

export default SingleMovie;
