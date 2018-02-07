import React from 'react'
import PropTypes from 'prop-types'

const SignUpForm = ({ onSubmit, onChangeHandler }) => {
  return (
    <div>
      <form>
        <h1> Sign Up </h1>
        <div>
          <input onChange={onChangeHandler} id='firstName' placeholder='username' />
        </div>
        <div>
          <input onChange={onChangeHandler} id='email' placeholder='email' />
        </div>
        <div>
          <input onChange={onChangeHandler} id='password' placeholder='password' />
        </div>
        <div>
          <button onClick={onSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default SignUpForm
