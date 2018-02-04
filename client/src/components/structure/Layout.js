import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
