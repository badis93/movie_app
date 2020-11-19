import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import {Form,Button} from 'react-bootstrap'

function AddMovies({handleClose,show,addMovie}) {
    const [newmovie,steNewmovie] = useState(
        {
           
            Rate : 0 ,
            title: "",

            backdrop_path: "",
           
            overview: "",
            release_date: ""
        }
    );
    
    const handleChange = e => {
        steNewmovie({...newmovie, [e.target.name]:e.target.value })
    }
    const onStarClick = (nextValue, prevValue, name) => {
        steNewmovie({...newmovie, Rate : nextValue} )
      }
  
    return (
      <div>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="put a title" name="title" onChange={handleChange} />
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="put the image URL" name="backdrop_path" onChange={handleChange} />
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newmovie.Rate}
          onStarClick={onStarClick}
          onChange={handleChange}

        />
  </Form.Group>

 

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="put a description" name="overview" onChange={handleChange}/>
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Date</Form.Label>
    <Form.Control type="text" placeholder="put the date" name="release_date" onChange={handleChange}/>
   
  </Form.Group>
 
</Form>



        </Modal.Body>




        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
                addMovie(newmovie);
               handleClose()

          }
              }>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }


export default AddMovies;