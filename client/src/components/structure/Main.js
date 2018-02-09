
import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import TrendingRecipesContainer from '../pages/trending/TrendingRecipesContainer'
import TopRatedContainer from '../pages/topRated/TopRatedContainer'

const Main = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/trending-recipes' render={() => <TrendingRecipesContainer />} />
      <Route path='/top-rated' render={() => <TopRatedContainer />} />
    </div>
  )
}

export default Main
