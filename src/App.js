import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import PopularMovies from './pages/PopularMovies';
import FavoriteMovies from './pages/FavoriteMovies';
import SingleMovie from './pages/SingleMovie';


function App() {
	return (
		<Router>
		<div className="App">
		<Routes>
		<Route path='/'  element={<PopularMovies />} />
		<Route path='/popularmovies'  element={<PopularMovies />} />
		<Route path='/favoritemovies'  element={<FavoriteMovies />} />
		</Routes>
		</div>
		</Router>
		);
}

export default App;
