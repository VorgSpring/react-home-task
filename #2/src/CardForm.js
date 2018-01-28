import React, { Component as ReactComponent } from 'react'
import './CardForm.css'

class CardForm extends ReactComponent {
    constructor(props) {
        super(props)

        this.state = {
            cardNumber: this.props.cardNumber
        }
    }

    handleChangeForm = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })

        this.props.onChangeForm(name, value)
    }

    componentWillUnmount() {}

    render() {
        return (
            <div className="card-form">
                <h1>Номер карты</h1>
                <input type="text" name="cardNumber" 
                    onChange={this.handleChangeForm}
                    placeholder="0000000000000000"
                    value={this.state.cardNumber}/>
            </div>
        )
    }
}

export default CardForm