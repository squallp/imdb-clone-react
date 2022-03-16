import Navigation from '../components/Navigation';
import FavMovies from '../components/FavMovies';
import React from 'react';

function FavoriteMovies() {
	return (
<React.Fragment>{/* Ovaj ovdje fragment  mora ici jer je to neko react pravilo da komponente budu wrapovane div-om ili njim */}
<Navigation />

<div className="container-fluid">
<div>
<FavMovies />
</div>
</div>
</React.Fragment>
);
}
export default FavoriteMovies;
