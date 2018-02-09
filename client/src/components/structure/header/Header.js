import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    border: '1px solid black'
  }
}

const Header = () => {
  return (
    <div style={style.container}>
      <nav style={style.container}>
        <NavItem exact to='/'> Home </NavItem>
        <NavItem to='/about'> About </NavItem>
        <NavItem to='/trending-recipes'> Trending </NavItem>
        <NavItem to='/top-rated'> Top Rated </NavItem>
      </nav>

    </div>
  )
}

export default Header
