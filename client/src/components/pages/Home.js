import React from 'react'
<<<<<<< Updated upstream
import Cube from './Cube'
=======
import './style.css'
>>>>>>> Stashed changes

const style = {
  containerOne: {
    backgroundColor: 'white',
    borderBottom: '3px solid #ffc9db',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    fontFamily: 'Quicksand'
  },
  containerTwo: {
    backgroundColor: 'white',
    borderBottom: '3px solid #87fffb',
    marginTop: '-200',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    fontFamily: 'Quicksand',
    textDecoration: 'none'
  },
  containerThree: {
    backgroundColor: 'white',
    borderBottom: '3px solid #aee26f',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    fontFamily: 'Quicksand'
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
    width: '50%',
    opacity: 0.7
  },
  p: {
    fontSize: 20
  }
}

<<<<<<< Updated upstream
const Home = () => {
  return (
    <div>
      <div style={style.container}>
        <p style={style.h1}> Lets Do Dinner </p>
        <Cube />
        <p style={style.h2}> Some text </p>
        <p style={style.h3}> Some text </p>
        <img alt='' style={style.img}src='https://cdn0.iconfinder.com/data/icons/bakery-10/512/Cupcake-256.png' />
      </div>
    </div>
  )
}

=======
const Home = () =>
  <div className='img' >
    <div >
      <div style={style.containerOne}>
        <h1> Welcome </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div style={style.containerTwo}>
        <h1> Get Started </h1>
        <i className='fa fa-spinner fa-spin' />
        <p style={style.p}> See Trending Rated Recipes </p>
        <p style={style.p}> See Top Rated Recipes </p>
        <p style={style.p}> Ingredient Search </p>
      </div>

      <div style={style.containerThree}>
        <h1> Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu bibendum at varius vel pharetra vel turpis. Semper risus in hendrerit gravida rutrum quisque non. Eu mi bibendum neque egestas congue quisque egestas. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aliquet enim tortor at auctor urna nunc id cursus metus. Integer enim neque volutpat ac tincidunt vitae. Enim neque volutpat ac tincidunt vitae. Sed turpis tincidunt id aliquet risus feugiat in.</p>
      </div>
    </div>
  </div>
>>>>>>> Stashed changes
export default Home
