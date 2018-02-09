import React from 'react'

const style = {
  container: {
    backgroundColor: '#ffc9db',
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontFamily: 'Oswald',
    backgroundColor: '#ffd84c',
    padding: 50,
    fontSize: 70
  },
  h2: {
    fontFamily: 'Quicksand',
    backgroundColor: '#aee26f'
  },
  h3: {
    backgroundColor: '#87fffb'
  },
  img: {
    width: '50%'
  }
}

const Home = () => {
  return (
    <div>
      <div style={style.container}>
        <p style={style.h1}> Lets Do Dinner </p>
        <p style={style.h2}> Some text </p>
        <p style={style.h3}> Some text </p>
        <img alt='' style={style.img}src='https://cdn0.iconfinder.com/data/icons/bakery-10/512/Cupcake-256.png' />
      </div>
    </div>
  )
}

export default Home
