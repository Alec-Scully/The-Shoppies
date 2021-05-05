import React, { Component } from 'react';
import MoviePosterCard from './MoviePosterCard.js';

class MoviePosters extends Component {

    render() {
        return (
            <div className="poster-container">
                <br />
                {this.props.movies ?
                        <ul>
                            {this.props.movies.map(movie => <MoviePosterCard key={movie.imdbID} movie={movie}></MoviePosterCard>)}
                        </ul>
                    :
                        null}
            </div>
        )
    }
}

export default MoviePosters