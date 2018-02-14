import React from 'react'
import PropTypes from 'prop-types'
import TopRatedCard from './TopRatedCard'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const TopRatedList = ({ topRatedRecipes }) =>
  <div style={style.container}>
    {
      topRatedRecipes.map((recipe, index) =>
        <TopRatedCard key={index} recipe={recipe} />
      )
    }
  </div>

TopRatedList.propTypes = {
  topRatedRecipes: PropTypes.array.isRequired
}

export default TopRatedList
