import React, { Component } from 'react'
import Confetti from 'react-confetti'

class Header extends Component {


    render() {
        return (
            <div className="header sticky">
                <h2>You have nominated five movies!</h2>
                <h2>Hopefully they win a Shoppy!</h2>
                <Confetti
                    numberOfPieces={1000}
                    recycle={false}
                />
            </div>
        )
    }
}

export default Header