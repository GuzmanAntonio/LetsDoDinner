import React from 'react'
import PropTypes from 'prop-types'
import TopRatedCard from './TopRatedCard'

const TopRatedList = ({ topRatedRecipes }) => {
  return (
    <div>
      {
        topRatedRecipes.map((recipe, index) =>
          <TopRatedCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

TopRatedList.propTypes = {
  topRatedRecipes: PropTypes.array.isRequired
}

export default TopRatedList
