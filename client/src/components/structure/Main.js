import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const Main = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  )
}

export default Main
