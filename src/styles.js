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
  },
  mainHeader: {
    nav: {
      width: '100vw',
      height: '10vh',
      lineHeight: '10vh',
      position: 'fixed',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      textAlign: 'center',
      zIndex: '5'
    },
    items: {
      fontSize: '2rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
  },
  sideArrow: {
    arrowBox: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    back: {
      content: 'url("./resource/back.png")',
      position: 'absolute',
      width: '50px',
      height: '50px',
      top: '50%',
      left: '5%',
      transform: 'translateY(-50%)'
    },
    next: {
      content: 'url("./resource/next.png")',
      position: 'absolute',
      width: '50px',
      height: '50px',
      top: '50%',
      right: '5%',
      transform: 'translateY(-50%)'
    }
  },
  bottomArrow: {
    arrowBox: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '10%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyItems: 'center',
      alignItems: 'center'
      
    },
    arrow: {
      content: 'url("./resource/arrow_down.png")',
      height: '30px',
      width: '30px'
    }
  },
  introduction:{
    header: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#ECB765'
    },
    silhouette:{
      position: 'absolute',
      top: '50%',
      right: '15%',
      transform: 'translateY(-50%)',
      content: 'url("./resource/silhouette.png")',
      width: '35%',
      height: '60%'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    section: {
      height: '2000px',
      width: '100vw',
      backgroundColor: 'white'
    }
  },
  history:{
    header: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#DB7A65'
    },
    silhouette:{
      position: 'absolute',
      top: '50%',
      right: '15%',
      transform: 'translateY(-50%)',
      content: 'url("./resource/silhouette.png")',
      width: '35%',
      height: '60%'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    section: {
      height: '2000px',
      width: '100vw',
      backgroundColor: 'white'
    }
  },
  work:{
    header: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#265E62'
    },
    silhouette:{
      position: 'absolute',
      top: '50%',
      right: '15%',
      transform: 'translateY(-50%)',
      content: 'url("./resource/silhouette.png")',
      width: '35%',
      height: '60%'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    section: {
      height: '2000px',
      width: '100vw',
      backgroundColor: 'white'
    }
  },
  contact:{
    header: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#685357'
    },
    silhouette:{
      position: 'absolute',
      top: '50%',
      right: '15%',
      transform: 'translateY(-50%)',
      content: 'url("./resource/silhouette.png")',
      width: '35%',
      height: '60%'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    section: {
      height: '2000px',
      width: '100vw',
      backgroundColor: 'white'
    }
  }
}

export default styles;