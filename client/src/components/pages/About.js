import React from 'react'

const styles = {
  container: {
    banckground: '#ffc9db',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    overFlow: 'hidden',
    backgroundImage: 'linear-gradient(to right bottom, #ffc9db, #ffc1c4, #ffbf9f, #ffc874, #ffd84c)',
    // minHeight: '100%',
    textAlign: 'center'
  },
  all: {
    paddingTop: '10px',
    paddingBottom: '30px'
  },
  p: {
    fontSize: 60,
    fontFamily: 'Oswald',
    color: '#ECF0F1',
    // borderBottom: '8px solid #ECF0F1',
    letterSpacing: '5px'
  },
  image: {
    opacity: '0.1'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 200,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50%'
    // maxHeight: '75%'
  },
  about: {
    // display: 'block',
    fontSize: '20px',
    font: 'bold',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    fontFamily: 'quicksand',
    // borderBottom: '3px solid #ffc9db',
    backgroundColor: '#ECF0F1',
    color: 'black',
    marginTop: '-30',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  },
  contact: {
    // display: 'block-flex',
    // alignItems: 'center',
    fontSize: '20px',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    fontFamily: 'quicksand',
    // borderBottom: '3px solid #ffc9db',
    backgroundColor: '#ECF0F1',
    marginTop: '-30',
    color: 'black',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  }
}

const About = () =>
  <div style={styles.container} >
    <div style={styles.all}>
      <img style={styles.image}alt='' src='https://img.domino.com/serve/literally-just-photos-of-really-organized-refrigerators-how-to-organize-refrigerator-fridge-full-of-produce-57c5df1581c866970ee84421-w1000_h1000.jpg' />
      <div style={styles.text}>
        <h3 style={styles.p}>ABOUT</h3>
        <p style={styles.about} >Food2Fork is an online database of socially ranked recipes with ingredient search functionality. The Food2Fork API provides programmer access to ingredient searches. The API supports GET and POST calls over HTTP. Responses are JSON formatted.</p>
        <h3 style={styles.p}>CONTACT</h3>
        <p style={styles.contact} >For user support, media inquiries, or feedback please contact: Support: support@food2fork.com</p>
      </div>
      <div style={styles.text} />
    </div>
  </div>
export default About