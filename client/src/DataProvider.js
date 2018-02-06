import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'
// import * as UserApi from './lib.userApi'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    recipes: []
  }

  methods = {
    getAllRecipes: () => {
      $.ajax({
        url: '/http://food2fork.com/api/get',
        method: 'GET'
      }).done((response) => {
        console.log(`Get All Recipe Data Provider`, response)
        this.setState({isLoaded: true, recipes: response.data})
      })
    },
    searchRecipe: () => {
      $.ajax({
        url: 'http://food2fork.com/api/search',
        method: 'GET'
      }).done((response) => {
        console.log(`Data Provider Search Route`, response)
        this.setState({isLoaded: true, recipes: response.data})
      })
    }
  }

  componentDidMount () {
    this.methods.getAllRecipes()
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
