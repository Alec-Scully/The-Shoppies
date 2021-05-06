import React, { Component } from 'react'

class ViewChoice extends Component {

    render() {
        return(
            <form>
                <label>
                    <input
                        type="radio"
                        name="list"
                        value="list"
                        defaultChecked={this.props.list}
                        onChange={this.props.changeView}
                    /> List
                </label>
                <label>
                    <input
                        type="radio"
                        name="list"
                        value="list"
                        defaultChecked={!this.props.list}
                        onChange={this.props.changeView}
                    /> Poster
                </label>
            </form>
        )
    }
}

export default ViewChoice