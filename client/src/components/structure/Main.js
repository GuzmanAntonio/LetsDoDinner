import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from '../pages/Home'
import About from '../pages/About'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'

const Main = ({domainData}) => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/sign-up'render={() => <SignUpContainer domainData={domainData} />} />
      <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
    </div>
  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Main
