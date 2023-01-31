import React from "react";
import serialize from "form-serialize";
import {useNavigate} from 'react-router-dom';


const AddMovie = (props) => {

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault()

        var newMovie = serialize(e.target, { hash: true });

        props.onAddMovie(newMovie);

        navigate("/")
    }

    return (
      <div className="container">
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            style={{marginBottom: "10px"}}
            disabled
          />
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-9">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" style={{marginBottom: "10px"}} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" style={{marginBottom: "10px"}} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" style={{marginBottom: "10px"}} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                style={{marginBottom: "10px"}}
                rows="5"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Add Movie"
          />
        </form>
      </div>
    );
}

export default AddMovie;
