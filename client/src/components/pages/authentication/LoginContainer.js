import React, {Component} from 'reacy'
import {withRouter} from 'react-router-dom'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  render () {
    return (
      <LoginForm
        {...this.state}
      />
    )
  }
}

export default withRouter(LoginContainer)
