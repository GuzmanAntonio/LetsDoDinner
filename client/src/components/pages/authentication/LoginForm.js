import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({onChangeHandler, onSubmit}) =>
  <form>
    <h1> Login </h1>
    <div>
      <label> Email: </label>
      <input onChange={onChangeHandler} type='email' id='email' />
    </div>

    <div>
      <label> password: </label>
      <input onChange={onChangeHandler} type='email' id='email' />
    </div>

    <button onClick={onSubmit}> Login </button>
  </form>

LoginForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
export default LoginForm
