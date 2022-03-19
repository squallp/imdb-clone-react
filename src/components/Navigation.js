import {   Link  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {query} from '../reducers/search';

function Navigation(props) {
    const dispatch = useDispatch();
    let queryRes = useSelector((state) => state.searchQuery.value);

    function execQuery(val) {
            dispatch(query(val.target.value))
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link to='/' className="navbar-brand">ImDb Clone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link to='/AllMovies' className="nav-link active">All movies</Link>
    </li>
    <li className="nav-item">
    <Link to='/popularmovies' className="nav-link active">Popular movies</Link>
    </li>
    <li className="nav-item">
    <Link to='/favoritemovies' className="nav-link active">Favorite movies</Link>
    </li>
    </ul>
    <form className="d-flex">
    {props.search && 
    <input onChange={execQuery}  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    }
    </form>
    </div>
    </div>
    </nav>
    </div>
    );
}

export default Navigation;
