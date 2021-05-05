import React, { Component } from "react";
import MovieList from './components/MovieList.js';
import Nominations from './components/Nominations.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {

  state = {
    movies: []
  }

  searchMovie = (title) => {
    console.log("http://www.omdbapi.com/?apikey=5d8af6ae&s="+title+"&y=&plot=short")
    fetch("http://www.omdbapi.com/?apikey=5d8af6ae&s="+title+"&y=&plot=short")
    .then(r => r.json())
    // .then(movieData => {debugger})
    .then(movieData => this.setState({ movies: movieData.Search }))
    .catch((error) => console.log(error))

  }
  // http://www.omdbapi.com/?apikey=5d8af6ae&t=$(title)
  // http://www.omdbapi.com/?apikey=5d8af6ae&t=inception&y=&plot=short&r=json

  render() {
    return (
      <div>
        
        <h1>The Shoppies</h1>
        <SearchBar searchMovie={this.searchMovie}></SearchBar>
        <MovieList movies={this.state.movies}></MovieList>
        <Nominations></Nominations>
      </div>
    );
  }
}

export default App;
