import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Axios from "axios";
import axios from "axios";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  //FETCH API COMPONENTDIDMOUNT

  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   const data = await response.json();
  //   this.setState({ movies: data });
  // }


  
  //AXIOS API COMPONENTDIDMOUNT

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }



  //FETCH API DELETEMOVIE

  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseURL, {
  //     method: "DELETE"
  //   })

  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };



  //AXIOS API DELETEMOVIE

  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`)

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  }


  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLocaleLowerCase()
          .indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <SearchBar searchMovieProp={this.searchMovie} />

        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
