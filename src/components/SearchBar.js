import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="row">
        <form action="" onSubmit={this.handleFormSubmit} className="d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="form-row mt-3 mb-3">
              <input
                onChange={this.props.searchMovieProp}
                type="text"
                className="form-control"
                placeholder="Search a movie"
              />
            </div>
          </div>
          <div className="col-lg-2 ">
            <Link to="/add" type="button" className="add-movie-btn btn btn-success btn-md mt-3 mb-3 ms-3">
              Add Movie
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
