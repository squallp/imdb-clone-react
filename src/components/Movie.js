import {IMAGES_500_URL} from '../route';
import React, {useEffect} from 'react';
import Single from './Single';
import {useDispatch,  useSelector} from "react-redux";
import {addToFav, removeFromFav} from '../reducers/favorites';

function Movie(props) {
	const favoritesState = useSelector((state) => state.favorites.value);
	let addRemoveButton;
	facoritesCheck(props.id);
	useEffect(() => {
  		facoritesCheck(props.id)
  	}, [favoritesState]);

  	
	//Ukoliko se proslijdi props "modal" dugme za prikaz modala ce biti izrendano
	const movieIDmodalCall = "#modalInfo"+props.id;
	const dispatch = useDispatch();
	
    

	function facoritesCheck(fav) {
		if (favoritesState.includes(fav)) {
			addRemoveButton = <button type="button" className="btn btn-primary" onClick={() => {dispatch(removeFromFav(props.id))}}>Remove Fav</button>;
		} else {
			addRemoveButton = <button type="button" className="btn btn-primary" onClick={() => {dispatch(addToFav(props.id))}}>Add to Fav</button>;
		}
	}
	return (
		<React.Fragment>
		<Single id={props.id}  key={props.id}/>
		<div>
		<div className="card" >
		<img src={IMAGES_500_URL+props.backdrop_path} className="card-img-top" alt={props.title} />
		<div className="card-body">
		<h5 className="card-title">{props.title}</h5>
		<h6 className="card-title"> Date: {props.release_date}</h6><br />
		<h6 className="card-title"> Vote: {props.vote_average}</h6><br />
		<p className="card-text">{props.overview}</p>
		<div className="row row row-cols-1 row-cols-sm-2" >
		<div className="col">
		{props.modal ? <p></p> : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={movieIDmodalCall}>
		Details...
		</button>}
		</div>
		<div className="col">
		{addRemoveButton}
		</div>
		</div>
		</div>
		</div>
		</div>
</React.Fragment>
		);
	}

	export default Movie;
