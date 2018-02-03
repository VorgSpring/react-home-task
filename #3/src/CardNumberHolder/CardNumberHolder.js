import React, { Component as ReactComponent } from 'react'
import CardNumberInput from './CardNumberInput'

class CardNumberHolder extends ReactComponent {
    state = {
        cardNumber: ''
    }

    handleChange = (number) => {
        this.setState({
            cardNumber: number
        })
    }

    render() {
        const {cardNumber} = this.state

        return (
            <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
        )
    }
}

export default CardNumberHolder