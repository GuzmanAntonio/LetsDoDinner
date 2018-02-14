import React from 'react'

const style = {
  container: {
    backgroundColor: 'white'

  },
  h1: {
    fontFamily: 'oswald',
    fontSize: 60,
    // padding: -5,
    marginTop: -15,
    paddingBottom: 20,
    letterSpacing: 2
  },
  p: {
    fontFamily: 'Parisienne',
    fontSize: 40,
    paddingTop: 10,
    margin: -5

  }
}

const Header = () => {
  return (
    <header style={style.container} >
      <p style={style.p}> Let's </p>
      <h1 style={style.h1}> Do Dinner! </h1>
    </header>
  )
}

export default Header
