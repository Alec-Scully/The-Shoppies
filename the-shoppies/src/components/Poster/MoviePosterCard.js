import React, { Component } from 'react'

class MoviePosterCard extends Component {

    render() {
        return(
            <div className="movie-card-poster">
                {this.props.movie.Title} <br/>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title + " Poster"}></img><br/>
                Release Year: {this.props.movie.Year}
                <button className="button" onClick={() => this.props.addToNominations(this.props.movie)} disabled={this.props.disableButton(this.props.movie)}> Nominate</button>
            </div>
        )
    }
}

export default MoviePosterCard;