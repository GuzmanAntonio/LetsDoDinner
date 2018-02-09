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
import IngredientSearchContainer from '../pages/ingredientSearch/IngredientSearchContainer'

const Main = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/trending-recipes' component={TrendingRecipesContainer} />
      <Route path='/top-rated' component={TopRatedContainer} />
      <Route path='/chicken' component={ChickenContainer} />
      <Route path='/beef' component={BeefContainer} />
      <Route path='/pork' component={PorkContainer} />
      <Route path='/fish' component={FishContainer} />
      <Route path='/ingredient-search' component={IngredientSearchContainer} />
    </div>
  )
}

export default Main
