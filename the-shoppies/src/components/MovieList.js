import React, { Component } from 'react';
import MovieListCard from './MovieListCard.js';

class MovieList extends Component {

    render() {
        return (
            <div className="split left">
                This is my MovieList Component
                    <div>
                        {this.props.movies ?
                            this.props.movies.map(movie => <MovieListCard key={movie.imdbID} movie={movie}></MovieListCard>)
                            :
                            null}
                    </div>
            </div>
        )
    }
}

export default MovieList;