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
        <img alt='' src='data:image/png;base64,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' />
      </a>
    </div>
    <div style={styles.three} >
      <img alt='' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-128.png' />
      <img alt='' src='https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-128.png' />
      <img alt='' src='https://www.iconfinder.com/icons/1012822/code_development_logo_mongodb_programming_icon' />

    </div>
  </div>

export default Footer
