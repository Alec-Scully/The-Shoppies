import React, { Component } from "react";
import MovieList from './components/MovieList.js';
import MoviePosters from './components/MoviePosters';
import ListNominations from './components/ListNominations.js';
import PosterNominations from './components/PosterNominations';
import SearchBar from './components/SearchBar.js';

class App extends Component {

  state = {
    movies: [],
    nominations: [],
    list: false
  }

  searchMovie = (title) => {
    fetch("http://www.omdbapi.com/?apikey=5d8af6ae&s=" + title + "&y=&plot=short&type=movie")
      .then(r => r.json())
      .then(movieData => this.setState({ movies: movieData.Search }))
      .catch((error) => console.log(error))
  }

  addToNominations = (movie) => {

  }

  removeFromNominations = (movie) => {
    
  }

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <SearchBar searchMovie={this.searchMovie}></SearchBar>
        {this.state.list ?
          <MovieList movies={this.state.movies}></MovieList>
          :
          <MoviePosters movies={this.state.movies}></MoviePosters>
        }
        {this.state.list ?
          <ListNominations></ListNominations>
          :
          <PosterNominations></PosterNominations>
        }
      </div>
    );
  }
}

export default App;
