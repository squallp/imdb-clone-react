import Navigation from '../components/Navigation';
import Movies from '../components/Movies';
import React, { useEffect, useState, useCallback} from 'react';
import { useSelector } from "react-redux";
import { API_KEY, API_URL, SEARCH_MOVIE_URL_PATH, API_KEY_URL_PATH, LANGUAGE_URL_PATH, PAGINATION_URL_PATH, POPULAR_URL_PATH, MOVIE_URL_PATH } from '../route';

function AllMovies() {
	let query = useSelector((state) => state.searchQuery.value);
	let languageRes = useSelector((state) => state.language.value);
    const [fetchUrl, setFetchUrl] = useState(fetchQueryUrl(query));
	
	function fetchQueryUrl(queryS) {
			if (!queryS || queryS === "" ) {
				return API_URL+MOVIE_URL_PATH+POPULAR_URL_PATH+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH+languageRes+PAGINATION_URL_PATH;
			}
			return API_URL + SEARCH_MOVIE_URL_PATH + API_KEY_URL_PATH + API_KEY + LANGUAGE_URL_PATH + languageRes + "&query=" + queryS + PAGINATION_URL_PATH;
		}
	

	useEffect(() => {
		setFetchUrl(fetchQueryUrl(query));
		console.log("dsds",query,fetchUrl);
	}, [query,languageRes]);

	return ( 
		<>
		<Navigation search /> 

		<div className = "container-fluid" >
		<div>

		<Movies fetchUrl={fetchUrl} search/>

		</div>
		</div> 
		</>
		);
}

export default AllMovies;