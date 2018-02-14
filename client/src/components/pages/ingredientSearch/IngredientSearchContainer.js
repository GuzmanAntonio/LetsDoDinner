import React, { Component } from 'react'
import SearchResultsList from './SearchResultsList'

const apiKey = '8defee2e32595ca866a94f526f42c9e6'

class IngredientSearchContainer extends Component {
  constructor () {
    super()
    this.state = {
      recipes: [],
      recipe: ''
    }
  }

  _search = (e) => {
    this.setState({ recipe: e.target.value })
  }

  fetchRecipe = (e) => {
    e.preventDefault()
    const { recipe } = this.state
    fetch(`https://sdg-cp.herokuapp.com?key=${apiKey}&q=${recipe}`, {
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
          <h2>Enter ingredients, get recipes!</h2>
          <p>Note: If entering multiple ingredients, please separate with commas.</p>
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
