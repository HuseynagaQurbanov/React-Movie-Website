import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";


const apiKey = "52880d7424f9350a289d7f699b9336f1";
const sessionId = "0229807dcfad10aa3aa4b8bded8a53fcdc2801ca";


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
    const response = await axios.get(`https://api.themoviedb.org/3/list/8236509?api_key=${apiKey}&language=en-US`);
    console.log(response.data.items);
    this.setState({ movies: response.data.items });
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
    await axios.post(`https://api.themoviedb.org/3/list/8236509/remove_item?media_id=${movie.id}&session_id=${sessionId}&api_key=${apiKey}`)

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
        movie.title
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
