import React from 'react'
import Menu from './header/Menu'
import Main from './Main'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Menu />
      <div>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
