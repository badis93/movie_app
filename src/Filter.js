import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


function Filter({search,newrate,setrate}) {


 const  onStarClick = (nextValue, prevValue, name) => {
  setrate(nextValue);
  }
 

    return (

        <div>
            <input
                    type="text"
                    placeholder="Searching"
                    onChange={(e) => {search(e.target.value)}}
                />
         <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newrate}
          onStarClick={onStarClick}
        />
          
        </div>
      );

}


export default Filter;