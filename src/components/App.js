import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }


  // Add Movie

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);

    this.getMovies();
  }


  EditMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
    
    this.setState( state => ({movies: state.movies.concat([updatedMovie])}))

    this.getMovies();
  }


  // Delete Movie

  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  // Search Movie

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLocaleLowerCase()
          .indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
      )
    }).sort((a,b)=>{
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    });

    return (
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/" 
              element={
                <React.Fragment>
                  <SearchBar searchMovieProp={this.searchMovie} />

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              }
            ></Route>

            <Route path="/add" element={ (<AddMovie onAddMovie = {(movie) => {this.addMovie(movie)}}/>)} />
            <Route path="/edit/:id" element={ (<EditMovie onEditMovie={(id, updatedMovie) => {this.EditMovie(id , updatedMovie)}}/>)} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
