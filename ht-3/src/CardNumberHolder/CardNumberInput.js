import React, { Component as ReactComponent } from 'react'

class CardNumberInput extends ReactComponent {
    static displayName = 'Card number input'

    constructor(props) {
        super(props)
        this.state = {
            number: this.format(this.props.cardNumber)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            number: this.format(nextProps.cardNumber)
        })
    }

    format(number) {
        if(number === '' || number === null || number === undefined) return ''
        number = this.normalize(number)
        return number.match(/.{1,4}/g).join(' ')
    }

    normalize(number) {
        return number.toString().replace(/\s/g, '')
    }

    onChange = (event) => {
        let value = event.target.value
        value = (value === '' || value === null) ? '' : this.normalize(value)
        this.props.onChange(value)
    }

    render() {
        const {number} = this.state
        return (
            <input value={number} onChange={this.onChange} />
        )
    }
}

export default CardNumberInput