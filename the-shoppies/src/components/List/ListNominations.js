import React, { Component } from 'react'
import NominationCard from '../NominationCard'

class ListNominations extends Component {
    render() {
        return (
            <div className="split right">
                <h2>Your Nominations:</h2>
                <ul>
                    {this.props.nominations.map(nomination => <NominationCard key={nomination.imdbID} nomination={nomination} removeFromNominations={this.props.removeFromNominations}></NominationCard>)}
                </ul>
            </div>
        )
    }
}

export default ListNominations;