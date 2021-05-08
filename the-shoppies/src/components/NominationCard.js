import React, { Component } from 'react'

class NominationCard extends Component {

    render() {
        return(
            <div>
                <li>{this.props.nomination.Title} ({this.props.nomination.Year}) <button className="button" onClick={() => this.props.removeFromNominations(this.props.nomination)}>Remove Nomination</button></li>
                <br/>
            </div>
        )
    }
}

export default NominationCard