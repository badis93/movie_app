import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import {ListGroup,ListGroupItem}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieCard({movies}) {
  
    return (
      <div className="card">
        
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path || movies.poster_path}`} />
  <Card.Body>
  <Card.Title>{movies.title}</Card.Title>
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movies.Rate}
        />
    <Card.Text>
    {movies.overview}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movies.release_date}</ListGroupItem>
   
  </ListGroup>
 
</Card>


          )
 
        
       
      </div>
    );
  }


export default MovieCard;


