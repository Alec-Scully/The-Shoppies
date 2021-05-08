import React, { Component } from "react";
import MovieList from './components/List/MovieList.js';
import ListNominations from './components/List/ListNominations.js';
import MoviePosters from './components/Poster/MoviePosters';
import PosterNominations from './components/Poster/PosterNominations';
import SearchBar from './components/SearchBar.js';
import ViewChoice from './components/ViewChoice.js'
import Header from './components/Header.js'
import ShoppiesLogo from './shoppies-logo.png'

class App extends Component {

  state = {
    movies: [],
    nominations: [],
    list: true,
    page: 1,
    totalResults: 1,
    totalPages: 1,
    searchTerm: ""
  }

  componentDidMount = () => {
    this.setState({ nominations: JSON.parse(localStorage.getItem("Nominations")) })
  }

  searchMovie = (title) => {
    this.setState({ searchTerm: title })
    this.setState({ page: 1 })
    fetch(`http://www.omdbapi.com/?apikey=5d8af6ae&s=${title}&y=&plot=short&type=movie&page=1`)
      .then(r => r.json())
      .then(movieData => this.setState({
        movies: movieData.Search,
        totalResults: movieData.totalResults
      }))
      .catch((error) => console.log(error))
    this.totalPages(this.state.totalResults)
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

  disablePageButton = (direction) => {
    switch (direction) {
      case 0:
        if (this.state.page === 1) {
          return true
        } else {
          return false
        }
      case 1:
        if (this.state.page === this.state.totalPages) {
          return true
        } else {
          return false
        }
      default:
        return false
    }
  }


  totalPages = (totalResults) => {
    if (totalResults % 10 === 0) {
      this.setState({ totalPages: ~~(totalResults / 10) })
    } else {
      this.setState({ totalPages: ~~(totalResults / 10) + 1 })
    }
  }

  changePage = (direction) => {
    let page
    switch (direction) {
      case 0:
        page = this.state.page - 1
        this.setState({ page })
        break;
      case 1:
        page = this.state.page + 1
        this.setState({ page })
    }

    fetch(`http://www.omdbapi.com/?apikey=5d8af6ae&s=${this.state.searchTerm}&y=&plot=short&type=movie&page=${page}`)
      .then(r => r.json())
      .then(movieData => this.setState({ movies: movieData.Search }))
      .catch((error) => console.log(error))
  }

  showView = () => {
    switch (this.state.list) {
      case true:
        return (
          <div className="display-field">
            <MovieList movies={this.state.movies} addToNominations={this.addToNominations} disableButton={this.disableButton} page={this.state.page} changePage={this.changePage} disablePageButton={this.disablePageButton} totalPages={this.state.totalPages} totalResults={this.state.totalResults}></MovieList>
            <ListNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></ListNominations>
          </div>
        )
      case false:
        return (
          <div className="display-field">
            <MoviePosters movies={this.state.movies} addToNominations={this.addToNominations} disableButton={this.disableButton} page={this.state.page} changePage={this.changePage} disablePageButton={this.disablePageButton} totalPages={this.state.totalPages} totalResults={this.state.totalResults}></MoviePosters>
            <PosterNominations nominations={this.state.nominations} removeFromNominations={this.removeFromNominations}></PosterNominations>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        {this.state.nominations.length >= 5 ?
          <Header></Header>
          :
          null
        }
        <div className="content">
          <img className="shoppies-logo" src={ShoppiesLogo}></img>
          <h1 className="title">The Shoppies</h1>
          <SearchBar searchMovie={this.searchMovie}></SearchBar>
          <ViewChoice list={this.state.list} changeView={this.changeView}></ViewChoice>
          {this.showView()}
        </div>
      </div>
    );
  }
}

export default App;
