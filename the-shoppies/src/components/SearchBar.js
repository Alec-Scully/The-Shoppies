import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        title: ""
    }
    render() {
        return(
            <div className="search-card">
                <form class="search-bar">
                    <p>Movie title</p>
                    <input onChange={(e) => this.setState({title: e.target.value})} class="search-field" name="title-search" type="text" placeholder="Enter a Movie Title to Search!"></input>
                </form>
            </div>
        )
    }
}

export default SearchBar