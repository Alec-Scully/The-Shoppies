import React, { Component } from 'react'
import NominationCard from '../NominationCard'

class PosterNominations extends Component {
    render(){
        return (
            <div className="poster-nominations">
                This is my Nominations Component
                {this.props.nominations ?
                <ul>

                    {this.props.nominations.map(nomination => <NominationCard key={nomination.imdbID} nomination={nomination} removeFromNominations={this.props.removeFromNominations}></NominationCard>)}
                </ul>
                            :
                            null}
            </div>
        )
    }
}

export default PosterNominations;