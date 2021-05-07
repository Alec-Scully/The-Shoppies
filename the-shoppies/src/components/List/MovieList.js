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
                <button onClick={() => this.props.changePage(0)} disabled={this.props.disablePageButton(0)}> Prev </button> 
                <button onClick={() => this.props.changePage(1)} disabled={this.props.disablePageButton(1)}> Next </button>
                <p> {`Showing Results ${(this.props.page * 10) - 9} - ${this.props.page * 10} out of ${this.props.totalResults}`} </p> 
            </div>
        )
    }
}

export default MovieList;