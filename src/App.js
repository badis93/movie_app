
import React from 'react';
import {MoviesData} from './MoviesData';
import MovieList from './MovieList';
import Filter from './Filter';

import { useState } from 'react';

function App () {

 
 const [movies,setMovies] = useState(MoviesData);
 const [keyword,setKeyword] = useState("");
 const [newrate,setNewrate] = useState(0);

 const search = (text) => {
  setKeyword(text);
 }

 const setrate = (rate) => {
  setNewrate(rate);
 }

 const addMovie = (movie) => {
  setMovies(movies.concat(movie));
 }


 /* const removeMovieById = id =>{
     const updateMovies = movies.filter(function(movie){
       return movie.id !== id
     })
   
     setMovies(updateMovies);
 
   };
 */

 console.log(MoviesData);
     return (
       <div className="container">
              <Filter search={search} setrate={setrate} newrate={newrate} />
                     <MovieList 
                     addMovie={addMovie}
                     movies={movies.filter(movie => 
                      movie.Rate >= newrate  &&
                      movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}
                     />
                   </div>
                      
     );
   }



export default App;
