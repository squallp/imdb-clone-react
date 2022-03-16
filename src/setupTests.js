// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


if (moviesData.length > 0) {
	FavMovies.map((movieID, index) => {
		const fetchUrl = API_URL+MOVIE_URL_PATH+movieID+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH;
		fetch(fetchUrl)
		.then((res) => res.json())
		.then((res) => {
			setMoviesData(res);

			console.log(moviesData);
		})
	}
}

 favMovies.map((movieID, index) => {
        const fetchUrl = API_URL+MOVIE_URL_PATH+movieID+API_KEY_URL_PATH+API_KEY+LANGUAGE_URL_PATH;
        fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
           setMoviesData(res.id);
        });
        console.log("MD"+moviesData);
        });




        fetch(fetchUrl)
       .then((res) => res.json())
       .then((res) => {
         console.log("res>"+res.id);
         if (loaded.includes(res.id)) {
         } else {
          loaded.push(res.id);
          preState.push(res);
          setMoviesData(preState)
        }
      })





       const fetchMovie = async () => {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        try {
          console.log("res>"+data.id);
            preState.push(data);
            setMoviesData(preState)
        } catch (err) {
          console.log(err);
        }
      };