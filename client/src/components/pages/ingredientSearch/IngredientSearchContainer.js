import React, { Component } from 'react'
import SearchResultsList from './SearchResultsList'

const API_KEY = '8defee2e32595ca866a94f526f42c9e6'

class IngredientSearchContainer extends Component {
  constructor () {
    super()
    this.state = {
      recipes: [],
      recipe: ''
    }
  }

  _search = event =>
    this.setState({
      recipe: event.target.value
    })

  fetchRecipe = event => {
    event.preventDefault()
    const { recipe } = this.state

    fetch(`https://sdg-cp.herokuapp.com?key=${API_KEY}&q=${recipe}`, {
      headers: {
        'target-url': 'https://food2fork.com/api/search'
      }
    })
      .then(r => r.json())
      .then(({recipes}) => {
        this.setState({ recipes })
      })
  }

  render () {
    return (
      <div>
        <form action='submit' onSubmit={this.fetchRecipe}>
          <input
            type='text'
            onChange={this._search}
            placeholder='Find a Recipe'
            value={this.state.recipe}
          />
          <button type='submit' onClick={this.fetchRecipe}>Search</button>
        </form>
        <SearchResultsList results={this.state.recipes} />
      </div>
    )
  }
}

export default IngredientSearchContainer
