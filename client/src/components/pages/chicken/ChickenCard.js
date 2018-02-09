import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  image: {
    width: '25%'
  }
}

const ChickenCard = ({ recipe }) => {
  return (
    <div>
      <p>{recipe.title}</p>
      <div><a href={recipe.f2f_url}>View Recipe</a></div>
      <img style={styles.image} alt='' src={recipe.image_url} />
    </div>
  )
}

ChickenCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default ChickenCard
