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
    list: true
    // list: false
  }

  searchMovie = (title) => {
    fetch("http://www.omdbapi.com/?apikey=5d8af6ae&s=" + title + "&y=&plot=short&type=movie")
      .then(r => r.json())
      .then(movieData => this.setState({ movies: movieData.Search }))
      .catch((error) => console.log(error))
  }

  addToNominations = (movie) => {
    let newNom = [...this.state.nominations, movie]
    this.setState({nominations: newNom})
    //add to local storage
  }

  removeFromNominations = (movie) => {
    let newNom = this.state.nominations.filter(nomination => movie !== nomination)
    this.setState({nominations: newNom})
    //add to local storage
  }

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <SearchBar searchMovie={this.searchMovie}></SearchBar>
        {this.state.list ?
          <MovieList movies={this.state.movies} addToNominations={this.addToNominations}></MovieList>
          :
          <MoviePosters movies={this.state.movies} addToNominations={this.addToNominations}></MoviePosters>
        }
        {this.state.list ?
          <ListNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></ListNominations>
          :
          <PosterNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></PosterNominations>
        }
      </div>
    );
  }
}

export default App;
