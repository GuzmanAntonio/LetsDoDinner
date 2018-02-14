import React from 'react'
import Menu from './header/Menu'
import Main from './Main'
import Footer from './Footer'

const style = {
  container: {
    backgroundColor: '#87fffb',
    textAlign: 'center'
  }
}

const Layout = () =>
  <div style={style.container}>
    <Menu />
    <div>
      <Main />
    </div>
    <Footer />
  </div>

export default Layout
