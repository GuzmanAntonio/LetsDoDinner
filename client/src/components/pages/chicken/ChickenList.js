import React from 'react'
import PropTypes from 'prop-types'
import ChickenCard from './ChickenCard'

const ChickenList = ({ chickenRecipes }) => {
  return (
    <div>
      {
        chickenRecipes.map((recipe, index) =>
          <ChickenCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

ChickenList.propTypes = {
  chickenRecipes: PropTypes.array.isRequired
}

export default ChickenList
