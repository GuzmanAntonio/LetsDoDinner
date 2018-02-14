import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Drawer from 'material-ui/Drawer'
// import ActionAndroid from 'material-ui/svg-icons/action/android'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import NavItem from './NavItem'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'black red 3px'
  },
  background: {
    color: 'red'
  }
}

export default class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    render () {
      return (
        <div style={styles.background} >
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <div>
                <RaisedButton
                  label='MENU'
                  onClick={this.handleToggle}
                />
              </div>
              <Drawer
                containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                docked
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})
                }
              >
                <AppBar title='Menu' />
                <nav style={styles.container} >
                  <NavItem exact to='/'>  Home </NavItem>
                  <NavItem to='/about'> About </NavItem>
                  <NavItem to='/trending-recipes'> Trending </NavItem>
                  <NavItem to='/top-rated'> Top Rated </NavItem>
                  <NavItem to='/ingredient-search'> Ingredient Search </NavItem>
                </nav>
              </Drawer>
            </div>
          </MuiThemeProvider>
        </div>
      )
    }
}
