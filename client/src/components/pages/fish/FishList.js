import React from 'react'
import PropTypes from 'prop-types'
import FishCard from './FishCard'

const FishList = ({ fishRecipes }) => {
  return (
    <div>
      {
        fishRecipes.map((recipe, index) =>
          <FishCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

FishList.propTypes = {
  fishRecipes: PropTypes.array.isRequired
}

export default FishList
