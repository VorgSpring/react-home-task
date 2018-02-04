import React, { Component as ReactComponent } from 'react'
import './PersonalForm.css'

class PersonalForm extends ReactComponent {
    constructor(props) {
        super(props)

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email
        }
    }

    handleChangeForm = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })

        this.props.onChangeForm(name, value)
    }

    render() {
        const {firstName, lastName, email} = this.state
        return (
            <div className="personal-form">
                <h1>Персональная информация</h1>
                
                <input type="text" name="firstName"
                    onChange={this.handleChangeForm}
                    placeholder="First Name"
                    value={firstName}/>

                <input type="text" name="lastName"
                    onChange={this.handleChangeForm}
                    placeholder="Last Name"
                    value={lastName}/>

                <input type="text" name="email" 
                    onChange={this.handleChangeForm}
                    placeholder="Email Name"
                    value={email}/>
            </div>
        )
    }
}

export default PersonalForm