import Navigation from '../components/Navigation';
import Movies from '../components/Movies';
import React, {useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import {query} from '../reducers/search';
import {API_KEY,API_URL, SEARCH_MOVIE_URL_PATH, AUTH_PATH, MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH, PAGINATION_URL_PATH} from '../route';


function AllMovies() {
    let query = useSelector((state) => state.searchQuery.value);
    let languageRes = useSelector((state) => state.language.value);
    
    let fetchUrl = "";


    useEffect(() => {
		fetchQueryUrl(query);
	}, [query]);
    fetchQueryUrl(query);

    function fetchQueryUrl(queryS) {
    	fetchUrl = API_URL+SEARCH_MOVIE_URL_PATH+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+languageRes+"&query="+queryS+PAGINATION_URL_PATH;
    }

	return (
<>
<Navigation search />
<div className="container-fluid">
<div>

<Movies fetchUrl={fetchUrl} search/>

</div>
</div>
</>
);
}

export default AllMovies;
