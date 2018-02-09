import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  image: {
    width: '25%'
  }
}

const TrendingRecipesCard = ({ recipe }) => {
  return (
    <div>
      <p>{recipe.title}</p>
      <img style={styles.image} alt='' src={recipe.image_url} />
    </div>
  )
}

TrendingRecipesCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default TrendingRecipesCard
