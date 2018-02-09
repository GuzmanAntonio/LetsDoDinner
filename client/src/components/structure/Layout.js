import React from 'react'
import Menu from './header/Menu'
import Main from './Main'
import Footer from './Footer'
import Header from '../structure/header/Header'

const style = {
  container: {
    backgroundColor: '#87fffb',
    textAlign: 'center'
  }
}

const Layout = () => {
  return (
    <div style={style.container} >
      <Header />
      <Menu />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
