import React from "react";

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
            <button type="button" className="add-movie-btn btn btn-success btn-md mt-3 mb-3 ms-3">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
