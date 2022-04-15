import Navigation from '../components/Navigation';
import FavMovies from '../components/FavMovies';
import React from 'react';

function FavoriteMovies() {
	return (
		<>
		<Navigation />

		<div className="container-fluid">
		<div>
		<FavMovies />
		</div>
		</div>
		</>
		);
}
export default FavoriteMovies;
