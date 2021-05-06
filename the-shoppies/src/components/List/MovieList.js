import React, { Component } from 'react';
import MovieListCard from './MovieListCard.js';

class MovieList extends Component {

    render() {
        return (
            <div className="split left">
                This is my MovieList Component
                {this.props.movies ?
                    <ul>
                        {this.props.movies.map(movie => <MovieListCard key={movie.imdbID} movie={movie} addToNominations={this.props.addToNominations} disableButton={this.props.disableButton}></MovieListCard>)}
                    </ul>
                    :
                    null
                }
            </div>
        )
    }
}

export default MovieList;