import React, {Component} from 'react'

class Recipes extends Component {
  componentDidMount () {
    fetch('http://www.food2fork.com/api/search?key=8defee2e32595ca866a94f526f42c9e6&q=shredded%20chicken')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('SUCCESS', json)
      }).catch(function (ex) {
        console.log('failed', ex)
      })
  }
  render () {
    return (
      <div>
        <p> ...loading </p>
      </div>
    )
  }
}

export default Recipes
