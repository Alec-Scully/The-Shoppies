import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        title: ""
    }

    setTitle = (title) => {
        this.setState({title: title.split(" ").join("+")})
        setTimeout(() => { this.props.searchMovie(this.state.title) }, 500);
    }

    render() {
        return(
            <div className="search-card">
                <form className="search-bar">
                    <p>Movie title</p>
                    <input onChange={(e) => this.setTitle(e.target.value)} className="search-field" name="title-search" type="text" placeholder="Enter a Movie Title to Search!"></input>
                </form>
            </div>
        )
    }
}

export default SearchBar