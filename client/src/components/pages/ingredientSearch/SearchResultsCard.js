import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    padding: 25,
    flexDirection: 'column',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 345,
    display: 'grid',
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    WebkitBoxSizing: 'border-box',
    borderTopRadius: 5
  },
  image: {
    maxWidth: '100%'
  },
  card: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    textAlign: 'center',
    fontSize: 20
  }
}

const SearchResultsCard = ({ recipe }) =>
  <div style={styles.container}>
    <h1 style={styles.h1}>{recipe.title}</h1>
    <div><a href={recipe.f2f_url}>View Recipe</a></div>
    <img style={styles.image} alt='' src={recipe.image_url} />
  </div>

SearchResultsCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default SearchResultsCard
