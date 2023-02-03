import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  async componentDidMount() {
    const id = window.location.pathname.replace("/edit/", "");
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data;
    console.log(movie);

    this.setState({
      name: movie.name,
      rating: movie.rating,
      overview: movie.overview,
      imageURL: movie.imageURL,
    });
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, rating, overview, imageURL } = this.state;

    const id = window.location.pathname.replace("/edit/", "");

    const updatedMovie = {
      name: name,
      rating: rating,
      overview: overview,
      imageURL: imageURL
    }

    this.props.onEditMovie(id, updatedMovie);

    useNavigate("/");
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Edit Movie.."
            style={{ marginBottom: "10px" }}
            disabled
          />
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-9">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                style={{ marginBottom: "10px" }}
                value={`${this.state.name}`}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                style={{ marginBottom: "10px" }}
                value={`${this.state.rating}`}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                style={{ marginBottom: "10px" }}
                value={`${this.state.imageURL}`}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                style={{ marginBottom: "10px" }}
                rows="5"
                value={`${this.state.overview}`}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Edit Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
