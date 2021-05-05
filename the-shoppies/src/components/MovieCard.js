import React, { Component } from 'react'

class MovieCard extends Component {

    render() {
        return(
            <div className="movie-card">
                {this.props.movie.Title}
                <img src={this.props.movie.Poster} alt={this.props.movie.Title + " Poster"}></img>
                Release Year: {this.props.movie.Year}
            </div>
        )
    }
}

export default MovieCard;