import React from 'react'
import IconButton from 'material-ui/IconButton'

const styles = {
  container: {
    background: '#2d3436',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: '20',
    paddingLeft: '10',
    paddingRight: '10',
    paddingBottom: '30',
    color: 'white',
    borderTop: '10px solid #ffc9db'
  },
  first: {
    paddingLeft: '20',
    paddingRight: '20',
    // background: 'black',
    fontFamily: 'oswald'
  },
  two: {
    alignItems: 'center'
  },
  three: {
    paddingRight: '20',
    paddingLeft: '20'
  },
  line: {
    borderBottom: '3px #87fffb solid'
  }
}

const Footer = () =>
  <div style={styles.container} >
    <div style={styles.first} >
      <div style={styles.line}>
        <h3>
          Full-Stack MERN Web-Application Project for BSCA
        </h3>
      </div>
      <p>Created by:
        <a href='https://github.com/LI05062017'>
          <IconButton iconClassName='fab fa-github' /></a>Lyndee Irish,
        <a href='https://github.com/rosadolson'>
          <IconButton iconClassName='fab fa-github-alt' /></a>Rosa Dolson, and
        <a href='https://github.com/alguzman1'>
          <IconButton iconClassName='fab fa-github-square' /></a>Tony Guzman</p>
      <div style={styles.line}>
        {/* <img alt='' src='https://cicakcode.io/content/images/2017/11/mern-stack.png' /> */}
      </div>
    </div>
    <div style={styles.two} >
      <a href='http://www.bigskycodeacademy.org/#intro'>
        <img alt='' src='http://www.bigskycodeacademy.org/wp-content/uploads/2017/02/BigSkyCodeAcademy.png' />
      </a>
      <img alt='' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-128.png' />
      <img alt='' src='https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-128.png' />
    </div>
  </div>

export default Footer
