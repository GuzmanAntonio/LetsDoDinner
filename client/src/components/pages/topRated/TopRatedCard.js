import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  image: {
    width: '25%'
  }
}

const TopRatedCard = ({ recipe }) => {
  return (
    <div>
      <p>{recipe.title}</p>
      <p>Rank:{recipe.social_rank}</p>
      <img style={styles.image} alt='' src={recipe.image_url} />
    </div>
  )
}

TopRatedCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default TopRatedCard
