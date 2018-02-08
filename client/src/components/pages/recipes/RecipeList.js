import React from 'react'
import RecipeCard from './ProductCard'
import PropTypes from 'prop-types'

const RecipeList = ({recipes}) =>
  <div>
    {
      recipes.map(recipe => {
        return <RecipeCard
          {...recipe}
        />
      })
    }
  </div>

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeList
