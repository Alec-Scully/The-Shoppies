import React, { Component } from 'react'

class MovieListCard extends Component{

    render() {
        return(
            <div className="movie-card-list">
                <li>{this.props.movie.Title} ({this.props.movie.Year}) <button> Nominate</button></li> 
                <br/>
            </div>
        )
    }
}

export default MovieListCard