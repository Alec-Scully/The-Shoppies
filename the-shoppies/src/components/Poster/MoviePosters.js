import React, { Component } from 'react';
import MoviePosterCard from './MoviePosterCard.js';

class MoviePosters extends Component {

    render() {
        return (
            <div className="poster-container">
                <br />
                {this.props.movies ?
                    <ul>
                        {this.props.movies.map(movie => <MoviePosterCard key={movie.imdbID} movie={movie} addToNominations={this.props.addToNominations} disableButton={this.props.disableButton}></MoviePosterCard>)}
                    </ul>
                    :
                    null}
                    <button className="button prev" onClick={() => this.props.changePage(0)} disabled={this.props.disablePageButton(0)}> Prev </button>
                    <button className="button prev" onClick={() => this.props.changePage(1)} disabled={this.props.disablePageButton(1)}> Next </button>
                    <p> {`Showing Results ${(this.props.page * 10) - 9} - ${this.props.page * 10} out of ${this.props.totalResults}`} </p>
            </div>
        )
    }
}

export default MoviePosters