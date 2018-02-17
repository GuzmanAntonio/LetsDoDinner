import React, { Component } from 'react'
import SearchResultsList from './SearchResultsList'

const apiKey = '8defee2e32595ca866a94f526f42c9e6'

const styles = {
  container: {
    padding: 20,
    border: '10px solid #ffc9db'
  },
  header: {
    fontFamily: 'Oswald',
    fontSize: 40,
    color: '#aee26f',
    marginBottom: 0,
    marginTop: 0
  },
  subHeader: {
    color: '#ffd84c',
    marginTop: 10,
    fontFamily: 'Quicksand',
    fontSize: 20
  },
  subHeader2: {
    color: '#ffc9db',
    fontFamily: 'Quicksand',
    fontSize: 12
  },
  input: {
    padding: 10,
    width: 400,
    fontFamily: 'Quicksand',
    border: '1px solid gray',
    borderRadius: 2
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: 100,
    border: '1px solid gray',
    borderRadius: 2,
    fontFamily: 'Quicksand',
    color: 'gray'
  }
}

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
        <form style={styles.container} action='submit' onSubmit={this.fetchRecipe}>          <p style={styles.header}>What's in your fridge?</p>
          <p style={styles.subHeader}>Enter the contents of your fridge and we'll tell you what to cook.</p>
          <p style={styles.subHeader2}>NOTE: separate ingredients with commas.</p>
          <input
            style={styles.input}
            type='text'
            onChange={this._search}
            placeholder='Enter Ingredients Here'
            value={this.state.recipe}
          />
          <div>
            <button style={styles.button} type='submit' onClick={this.fetchRecipe}>Find Me Dinner</button>
          </div>
        </form>
        <SearchResultsList results={this.state.recipes} />
      </div>
    )
  }
}

export default IngredientSearchContainer
