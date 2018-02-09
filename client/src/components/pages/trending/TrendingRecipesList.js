import React from 'react'
import PropTypes from 'prop-types'
import TrendingRecipesCard from './TrendingRecipesCard'

const TrendingRecipesList = ({ trendingRecipes }) => {
  return (
    <div>
      {
        trendingRecipes.map((recipe, index) =>
          <TrendingRecipesCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

TrendingRecipesList.propTypes = {
  trendingRecipes: PropTypes.array.isRequired
}

export default TrendingRecipesList
