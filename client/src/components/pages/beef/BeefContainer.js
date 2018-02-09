import React, {Component} from 'react'
import BeefList from './BeefList'

class BeefContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beefRecipes: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    fetch('http://www.food2fork.com/api/search?key=8defee2e32595ca866a94f526f42c9e6&q=beef')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      })
      .then(data => this.setState({ beefRecipes: data.recipes, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render () {
    const { isLoading, error } = this.state
    if (error) {
      return <p>{error.message}</p>
    }
    if (isLoading) {
      return <p>Loading ...</p>
    }
    return (
      <div>
        <BeefList beefRecipes={this.state.beefRecipes} />
      </div>
    )
  }
}

export default BeefContainer
