import React from "react";


const tmdbBasePath = "https://www.themoviedb.org/t/p/w220_and_h330_face/"

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-3" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img src={tmdbBasePath + movie.poster_path} className="cart-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={(e) => {
                    props.deleteMovieProp(movie);
                  }}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge badge-info">{movie.vote_average}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
