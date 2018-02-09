import React from 'react'
import PropTypes from 'prop-types'
import PorkCard from './PorkCard'

const PorkList = ({ porkRecipes }) => {
  return (
    <div>
      {
        porkRecipes.map((recipe, index) =>
          <PorkCard key={index} recipe={recipe} />
        )
      }
    </div>
  )
}

PorkList.propTypes = {
  porkRecipes: PropTypes.array.isRequired
}

export default PorkList
