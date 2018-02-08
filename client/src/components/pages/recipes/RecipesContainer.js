import React from 'react'
import RecipeList from './RecipeList'
import PropTypes from 'prop-types'

const RecipesContainer = ({domainData}) =>

  <RecipeList
    recipes={domainData.recipes}
  />

RecipesContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default RecipeList
