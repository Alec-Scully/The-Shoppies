import React, { Component } from "react";
import MovieList from './components/List/MovieList.js';
import ListNominations from './components/List/ListNominations.js';
import MoviePosters from './components/Poster/MoviePosters';
import PosterNominations from './components/Poster/PosterNominations';
import SearchBar from './components/SearchBar.js';
import ViewChoice from './components/ViewChoice.js'
import Header from './components/Header.js'
// import Banner from 'react-js-banner'

class App extends Component {

  state = {
    movies: [],
    nominations: [],
    list: true,
    page: 1
  }

  componentDidMount = () => {
    this.setState({ nominations: JSON.parse(localStorage.getItem("Nominations")) })
  }

  searchMovie = (title) => {
    fetch(`http://www.omdbapi.com/?apikey=5d8af6ae&s=${title}&y=&plot=short&type=movie&page=1`)
      .then(r => r.json())
      .then(movieData => this.setState({ movies: movieData.Search }))
      .catch((error) => console.log(error))
  }

  addToNominations = (movie) => {
    let newNom = [...this.state.nominations, movie]
    this.setState({ nominations: newNom })
    localStorage.setItem("Nominations", JSON.stringify(newNom))
  }

  removeFromNominations = (movie) => {
    let newNom = this.state.nominations.filter(nomination => movie !== nomination)
    this.setState({ nominations: newNom })
    localStorage.setItem("Nominations", JSON.stringify(newNom))
  }

  changeView = () => {
    let newView = !this.state.list
    this.setState({ list: newView })
  }

  disableButton = (movie) => {
    let nominatedIds = this.state.nominations.map(nom => nom.imdbID)
    if (this.state.nominations.length >= 5 || nominatedIds.includes(movie.imdbID)) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        {this.state.nominations.length >= 5 ?
          <Header></Header>
          :
          null
        }
        <div className="content">
          <h1>The Shoppies</h1>
          <SearchBar searchMovie={this.searchMovie}></SearchBar>
          <ViewChoice list={this.state.list} changeView={this.changeView}></ViewChoice>
          {this.state.list ?
            <MovieList movies={this.state.movies} addToNominations={this.addToNominations} disableButton={this.disableButton}></MovieList>
            :
            <MoviePosters movies={this.state.movies} addToNominations={this.addToNominations} disableButton={this.disableButton}></MoviePosters>
          }

          {this.state.list ?
            <ListNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></ListNominations>
            :
            <PosterNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></PosterNominations>
          }
        </div>
      </div>
    );
  }
}

export default App;
