import React from 'react'
import Menu from './header/Menu'
import Main from './Main'
import Footer from './Footer'

const style = {
  container: {
    backgroundColor: '#87fffb',
    textAlign: 'center'
  },
  menu: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const Layout = () => {
  return (
    <div style={style.container} >
      <div style={style.menu} >
        <Menu />
      </div>
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
