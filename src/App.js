
import React from 'react';
import {moviesData} from './MovieCard';
import MovieList from './MovieList';

import { useState } from 'react';

function App () {

 
   const [movies, setMovies] = useState(moviesData);
  const removeMovieById = id =>{
     const updateMovies = movies.filter(function(movie){
       return movie.id !== id
     })
   
     setMovies(updateMovies);
 
   };
 
     return (
       <div className="container">
        
             <div className="row">
               {movies.map(movie => {
                 console.log(movies);
                 return(
                   <div className="col-4" key={movie.id}>
                     <MovieList 
                       item={movie} 
                      removeMovieById={removeMovieById}
                     />
                   </div>
                 );
               })}
             </div>
           </div>
      
     );
   }



export default App;
