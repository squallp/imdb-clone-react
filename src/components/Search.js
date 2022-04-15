import {useDispatch, useSelector} from "react-redux";
import {query} from '../reducers/search';

function Search() {
    const dispatch = useDispatch();
    let queryRes = useSelector((state) => state.searchQuery.value);

    function execQuery(val) {
        dispatch(query(val.target.value))
    }

    return (
        <>
        <form className="d-flex mb-2">
        <input onChange={execQuery} value={queryRes}  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
        </>
        );
}

export default Search;