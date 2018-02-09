import React, {Component} from 'react'
import PorkList from './PorkList'

class PorkContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      porkRecipes: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    fetch('http://www.food2fork.com/api/search?key=8defee2e32595ca866a94f526f42c9e6&q=pork')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      })
      .then(data => this.setState({ porkRecipes: data.recipes, isLoading: false }))
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
        <PorkList porkRecipes={this.state.porkRecipes} />
      </div>
    )
  }
}

export default PorkContainer
