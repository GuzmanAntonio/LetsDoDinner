import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'
import PropTypes from 'prop-types'

const Layout = ({domainData}) => {
  return (
    <div>
      <Header domainData={domainData} />
      <div>
        <Main domainData={domainData} />
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Layout
