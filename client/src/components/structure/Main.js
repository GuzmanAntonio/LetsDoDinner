import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import TrendingRecipesContainer from '../pages/trending/TrendingRecipesContainer'
import TopRatedContainer from '../pages/topRated/TopRatedContainer'
import ChickenContainer from '../pages/chicken/ChickenContainer'
import BeefContainer from '../pages/beef/BeefContainer'
import PorkContainer from '../pages/pork/PorkContainer'
import FishContainer from '../pages/fish/FishContainer'

const Main = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/trending-recipes' render={() => <TrendingRecipesContainer />} />
      <Route path='/top-rated' render={() => <TopRatedContainer />} />
      <Route path='/chicken' render={() => <ChickenContainer />} />
      <Route path='/beef' render={() => <BeefContainer />} />
      <Route path='/pork' render={() => <PorkContainer />} />
      <Route path='/fish' render={() => <FishContainer />} />
    </div>
  )
}

export default Main
