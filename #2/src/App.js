import React, { Component as ReactComponent } from 'react'
import './App.css'
import PersonalForm from './PersonalForm'
import CardForm from './CardForm'
import Step from './Step'

class App extends ReactComponent {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    }

    get steps() {
        const {step} = this.state
        const titles = ['Personal information', 'Card information', 'Finish']

        return titles.map((title, index) => {
            const number = index + 1
            return (
                <Step
                    key = {Date.now().valueOf()}
                    isSelected={number === step}
                    isClickable={number < step}
                    number={number}
                    onClick={this.handleTabClick}
                > {title} 
                </Step>
            )
        })
    }

    handleTabClick = (value) => {
        const step = parseInt(value, 10)
        if(!isNaN(step)) this.setState({ step })
    }

    handleChangeForm = (key, value) => {
        if(this.state[key] !== undefined) {
            this.setState({
                [key]: value
            })
        }
    }

    handleClickNextForm = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    isFormCommitable = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state
        switch(step) {
            case 1:
                return firstName !== '' && lastName !== '' && email !== '' && email.includes('@')
            
            case 2:
                return cardNumber.length === 16

            default:
                return false
        }
    }

    handleChangeTimeOver = () => {}

    renderForm = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state
        switch(step) {
            case 1:
                return <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm} />
            
            case 2:
                return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />

            case 3:
                return 'Поздравляем!'

            default:
                return null
        }
    }

    render() {
        return (
            <div className="container">
                <div className="tab-panel">
                    {this.steps}
                </div>

                <div className="form-content">
                    {this.renderForm()}
                </div>

                <div className="button-panel">
                    <button className="button button-next" onClick={this.handleClickNextForm} disabled={!this.isFormCommitable()}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default App