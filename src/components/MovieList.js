import React from "react";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-3" key={i}>
          <div className="card mb-4 shadow-sm">
            <img src={movie.imageURL} className="cart-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title" 
                  style={{whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"}}
                  >{movie.name}</h5>
              <p className="card-text" 
                 style={{WebkitLineClamp: "4",
                         overflow: "hidden",
                         textOverflow: "ellipsis",
                         WebkitBoxOrient: "vertical",
                         display: "-webkit-box"}}
                 >{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={() => {
                    props.deleteMovieProp(movie);
                  }}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span style={{color: "white", background: "#0473d3"}} className="badge badge-info">{movie.rating}</span>
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
