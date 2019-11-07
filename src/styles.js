const styles = {
  opening: {
    screen:{
      position: 'fixed',
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    },
    name: {
      background: 'url("./resource/colorful.jpg") repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      textAlign: 'center',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      font: '900 0.5vw "Open Sans", sans-serif',
      whiteSpace: 'nowrap',
      cursor: 'default'
    },
    button: {
      position: 'absolute',
      bottom: '15%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '50px',
      display: 'none',
      cursor: 'pointer',
      fontWeight: '900',
      color: 'white',
      textShadow: '2px 2px 6px #000',
      transitionDuration: '1s'
    },
    ask:{
      position: 'absolute',
      bottom: '10%',
      left: '5%',
      transform: 'translateX(-10%)'
    },
    control:{
      position: 'absolute',
      bottom: '5%',
      left: '5%',
      content: 'url("./resource/forward_button.png")',
      height: '30px',
      width: '50px',
      cursor: 'pointer'
    } 
  }
}

export default styles;