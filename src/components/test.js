<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         {moviesData ? <Movie key={moviesData.id} title={moviesData.original_title} backdrop_path={moviesData.backdrop_path} release_date={moviesData.release_date} poster_path={moviesData.poster_path} overview={moviesData.overview} vote_average={moviesData.vote_average}/>
         : <p> Nema nista </p> }

    </div>




    <React.Fragment>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
         {moviesData ? <Movie key={moviesData.id} title={moviesData.original_title} backdrop_path={moviesData.backdrop_path} release_date={moviesData.release_date} poster_path={moviesData.poster_path} overview={moviesData.overview} vote_average={moviesData.vote_average}/>
         : <p> Nema nista </p> }
         <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
  </div>
    </div>
  </div>
</div>
</React.Fragment>