import React, { Component } from 'react'

class MoviePosterCard extends Component {

    render() {
        return(
            <div className="movie-card-poster">
                {this.props.movie.Title} <br/>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title + " Poster"}></img><br/>
                Release Year: {this.props.movie.Year}
            </div>
        )
    }
}

export default MoviePosterCard;