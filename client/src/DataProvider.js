import React, {Component} from 'react'
import Layout from './components/structure/Layout'
// import $ from 'jquery'
// import * as UserApi from './lib/userApi'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    recipes: []
  }

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
    const domainData = {
      ...this.state,
      ...this.methods
    }

    return (
      <div>
        {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : <div>...Thinking</div>
        }
      </div>
    )
  }
}

export default DataProvider
