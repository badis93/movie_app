

import MovieCard from './MovieCard';
import AddMovies from './AddMovies';
import { useState } from 'react';


function MovieList({movies,addMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div className="card">
        {movies.map(  (el,i)  => (
               <MovieCard movies={el}  key={i}/>
        )

        )
                
        }
        <div> 
          <button onClick={handleShow} >Add New Movie</button>
        <AddMovies handleClose={handleClose} show={show} addMovie={addMovie}/>
        
        </div>

      </div>
    );
  }


export default MovieList;