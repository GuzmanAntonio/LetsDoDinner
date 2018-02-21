import React from 'react'

const styles = {
  container: {
    banckground: '#ffc9db',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overFlow: 'hidden',
    backgroundImage: 'linear-gradient(to right bottom, #ffc9db, #ffc1c4, #ffbf9f, #ffc874, #ffd84c)',
    // maxWidth: '80%',
    textAlign: 'center'
  },
  p: {
    fontSize: 60,
    fontFamily: 'Oswald',
    color: 'black',
    borderBottom: '3px solid black'
  },
  image: {
    opacity: '0.1'
  },
  text: {
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  about: {
    display: 'block',
    fontSize: '20px',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    fontFamily: 'quicksand',
    borderBottom: '3px solid #ffc9db',
    backgroundColor: '#ECF0F1',
    color: 'black',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  },
  contact: {
    display: 'block-flex',
    alignItems: 'center',
    fontSize: '20px',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    fontFamily: 'quicksand',
    borderBottom: '3px solid #ffc9db',
    backgroundColor: '#ECF0F1',
    color: 'black',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  },
  list: {

  }
}

const About = () =>
  <div style={styles.container} >
    <img style={styles.image}alt='' src='https://img.domino.com/serve/literally-just-photos-of-really-organized-refrigerators-how-to-organize-refrigerator-fridge-full-of-produce-57c5df1581c866970ee84421-w1000_h1000.jpg' />
    <div style={styles.text}>
      <h3 style={styles.p}>ABOUT</h3>
      <div style={styles.about} >
        <p>Food2Fork is an online database of socially ranked recipes with ingredient search functionality. The Food2Fork API provides programmer access to ingredient searches. The API supports GET and POST calls over HTTP. Responses are JSON formatted.</p>
      </div>
      <h3 style={styles.p}>CONTACT</h3>
      <div style={styles.contact} >
        <p>For user support, media inquiries, or feedback please use one of the following email addresses:</p>
        <ul>
          <li>User Support: support@food2fork.com</li>
          <li>Media: media@food2fork.com</li>
          <li>Feedback: feedback@food2fork.com</li>
        </ul>
      </div>
    </div>
  </div>

export default About
