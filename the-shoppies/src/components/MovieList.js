import React, { Component } from 'react'
import MovieCard from './MovieCard.js'

class MovieList extends Component {

    render(){
        return (
            <div className="movie-list">
                This is my MovieList Component
                <br/>
                {this.props.movies ? 
                this.props.movies.map( movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                :
                null}
            </div>
        )
    }
}

export default MovieList;