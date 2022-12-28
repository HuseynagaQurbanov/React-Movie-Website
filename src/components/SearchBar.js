import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <form action="" onSubmit={this.handleFormSubmit}>
            <div className="form-row mt-3 mb-3">
              <input
                onChange={this.props.searchMovieProp}
                type="text"
                className="form-control"
                placeholder="Search a movie"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
