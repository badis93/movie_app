

function MovieList(props) {
  
    return (
      <div className="card">
        <img 
          className="card-img-top" 
          src={`https://image.tmdb.org/t/p/w500${props.item.backdrop_path || props.item.poster_path}`}
              alt=""
           />
      <div className="card-body">
        <h6 className="card-title">{props.item.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {props.item.vote_average}</p>
         
        </div>
        <button 
          type="button" 
          onClick={() => {
            props.removeMovieById(props.item.id);
          }}
        >
          Delete
        </button>
      </div>
      </div>
    );
  }


export default MovieList;