import React from 'react'
import PropTypes from 'prop-types'
import BeefCard from './BeefCard'

const BeefList = ({ beefRecipes }) => {
  return (
    <div>
      {
        beefRecipes.map((recipe, index) =>
          <BeefCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

BeefList.propTypes = {
  beefRecipes: PropTypes.array.isRequired
}

export default BeefList
