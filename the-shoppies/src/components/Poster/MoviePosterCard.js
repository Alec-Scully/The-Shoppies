import React, { Component } from 'react'

class MoviePosterCard extends Component {

    render() {
        return(
            <div className="movie-card-poster">
                <img src={this.props.movie.Poster} alt={this.props.movie.Title + " Poster"}></img><br/>
                <h3>{this.props.movie.Title} ({this.props.movie.Year})</h3>
                <button className="button" onClick={() => this.props.addToNominations(this.props.movie)} disabled={this.props.disableButton(this.props.movie)}> Nominate</button>
                <br/><br/>
            </div>
        )
    }
}

export default MoviePosterCard;