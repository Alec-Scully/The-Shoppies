import React, { Component } from 'react'

class MovieListCard extends Component {

    render() {
        return (
            <div className="movie-card-list">
                <li>{this.props.movie.Title} ({this.props.movie.Year}) <button className="button" onClick={() => this.props.addToNominations(this.props.movie)} disabled={this.props.disableButton(this.props.movie)}> Nominate</button></li>
                <br/>
            </div>
        )
    }
}

export default MovieListCard