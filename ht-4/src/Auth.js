import React, {Component, Fragment} from 'react'
import { authorizeUser, isAuthorized } from './AuthorizeApi'
import { Redirect } from 'react-router-dom'

class Auth extends Component {
  state = {
    isAuthorized,
    isValid: true,
    email: '',
    password: ''
  }

  onChange = (event) => {
    const {name, value} = event.target
        
    this.setState({
        [name]: value
    })
  }

  handleSubmit = () => {
    const {email, password} = this.state
    const isAuthorized = authorizeUser(email, password)
    this.setState({
      isAuthorized,
      isValid: isAuthorized,
      email: '',
      password: ''
    })
  }

  render() {
    const {isAuthorized, isValid, email, password} = this.state
    
    return (
      <Fragment>
        {isAuthorized && <Redirect to="/" />}
        <div>
          <input onChange={this.onChange} type="email" name="email" value={email} placeholder="email" />
          <input onChange={this.onChange} type="password" name="password" value={password} placeholder="password" />
          {!isValid && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleSubmit} type="button">Submit</button>
      </Fragment>
    )
  }
}

export default Auth
