import React, { Component } from 'react';
import MovieListCard from './MovieListCard.js';

class MovieList extends Component {

    render() {
        return (
            <div className="split left">
                <h2>Search Results:</h2>
                {this.props.movies ?
                    <ul>
                        {this.props.movies.map(movie => <MovieListCard key={movie.imdbID} movie={movie} addToNominations={this.props.addToNominations} disableButton={this.props.disableButton}></MovieListCard>)}
                    </ul>
                    :
                    null
                }
                <button className="button prev" onClick={() => this.props.changePage(0)} disabled={this.props.disablePageButton(0)}> Prev </button> 
                <button className="button next" onClick={() => this.props.changePage(1)} disabled={this.props.disablePageButton(1)}> Next </button>
                <p className="search-results"> {`Showing Results ${(this.props.page * 10) - 9} - ${this.props.page * 10} out of ${this.props.totalResults}`} </p> 
            </div>
        )
    }
}

export default MovieList;