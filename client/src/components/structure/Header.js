import React from 'react'
import './styles.css'

const style = {
  container: {
    borderBottom: '2px solid black',
    backgroundColor: 'white',
    paddingTop: 10,
    marginBottom: -70

  },
  h1: {
    fontFamily: 'oswald',
    fontSize: 70,
    marginTop: -15,
    paddingBottom: 20,
    letterSpacing: 2
  },
  p: {
    fontFamily: 'Parisienne',
    fontSize: 50,
    paddingTop: 10,
    margin: -5

  },
  dots: {
    margin: -100
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 30,
    // border: '1px solid black',
    paddingRight: 1000
  },
  img: {
    maxWidth: '100%'
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
