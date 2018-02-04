import React from 'react'
import NavItem from './NavItem'

const Header = () => {
  return (
    <div>
      <nav>
        <NavItem exact to='/'> Home </NavItem>
        <NavItem to='/about'> About </NavItem>
      </nav>

    </div>
  )
}

export default Header
