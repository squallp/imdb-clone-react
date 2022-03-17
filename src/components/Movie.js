import {IMAGES_500_URL} from '../route';
import React, {useEffect} from 'react';
import Single from './Single';
import {useDispatch,  useSelector} from "react-redux";
import {addToFav, removeFromFav} from '../reducers/favorites';
import { format } from 'date-fns';

function Movie(props) {
	const favoritesState = useSelector((state) => state.favorites.value);
	let addRemoveButton;
	const date = format(Date.parse(props.release_date), 'dd MM yyyy');
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
		{ props.tagline  &&
		<h5 className="card-title">{props.tagline}
		</h5>}
		<h6 className="card-text"> Date: {date}</h6>
		<h6 className="card-text"> Vote: {props.vote_average}</h6>
		<p className="card-text">{props.overview}</p>
		{ props.genres  && 
			<h6 className="card-title">Genres: 
			<ul>
		{props.genres.map((genres, index) => {
				return (<li>{genres.name}</li>);
				 })}
		</ul></h6>}
		{ props.budget  &&
		<h5 className="card-text">Budget: $ {props.budget.toLocaleString()}</h5>}
		{ props.revenue  &&
		<h5 className="card-text">Revenue: ${props.revenue.toLocaleString()}</h5>}
		{ props.production_companies  && 
			<h6 className="card-title">Production companies: 
			<ul>
		{props.production_companies.map((production_companies, index) => {
				return (<li>{production_companies.name}</li>);
				 })}
		</ul></h6>}
		<div className="row row row-cols-1 row-cols-sm-2" >
		<div className="col">
		{props.modal ? <p></p> : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={movieIDmodalCall}>
		Details...
		</button>}
		</div>
		{!props.production_companies  && <div className="col">{addRemoveButton}</div>}
		</div>
		</div>
		</div>
		</div>
</React.Fragment>
		);
	}
	export default Movie;
