import React, { Component } from 'react'
import Confetti from 'react-confetti'

class Header extends Component {


    render() {
        return (
            <div className="header sticky">
                <h2>You selected five movies!</h2>
                <Confetti
                    numberOfPieces={1000}
                    recycle={false}
                />
            </div>
        )
    }
}

export default Header