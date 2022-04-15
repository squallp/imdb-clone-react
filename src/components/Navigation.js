import {   Link  } from "react-router-dom";
import SelectLanguage from '../components/SelectLanguage';
import Search from '../components/Search';

function Navigation(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link to='/' className="navbar-brand">ImDb Clone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link to='/AllMovies' className="nav-link active">All movies search</Link>
    </li>
    <li className="nav-item">
    <Link to='/popularmovies' className="nav-link active">Popular movies</Link>
    </li>
    <li className="nav-item">
    <Link to='/favoritemovies' className="nav-link active">Favorite movies</Link>
    </li>
    </ul>
    
    {props.search && 
        <Search />
    }

    <SelectLanguage />

    </div>
    </div>
    </nav>
    </>
    );
}

export default Navigation;
