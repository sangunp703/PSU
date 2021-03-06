const styles = {
  test:{
    screen: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black'
    },
    video: {
      width: '75vw',
      height: 'auto',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: '1',
      transitionProperty: 'opacity',
      transitionTimingFunction: 'cubic-bezier(1,0,0.5,1)',
      transitionDuration: '7s'
    },
    name:{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '8vw',
      opacity: '0',
      transitionProperty: 'opacity',
      transitionTimingFunction: 'cubic-bezier(0.75,0,0.25,0)',
      transitionDuration: '7s',
      color: 'white',
      whiteSpace: 'nowrap'
    }
  },
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
    warning: {
      position: 'absolute',
      bottom: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'none'
    },
    musicChoice:{
      float: 'left',
      width: '40px',
      height: '40px',
      padding: '6px',
      borderRadius: '10px',
      border: '1px solid black',
      marginRight: '20px',
      transitionDuration: '1s',
      cursor: 'pointer'
    },
    word:{
      float: 'left',
      fontSize: '18px'
    },
    button: {
      position: 'absolute',
      bottom: '10%',
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
      height: '8vmin',
      lineHeight: '8vmin',
      position: 'fixed',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      textAlign: 'center',
      zIndex: '10'
    },
    items: {
      width: '100%',
      height: '100%',
      fontSize: '2vw',
      cursor: 'pointer',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
  },
  sideArrow: {
    arrowBox: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    backArea:{
      position: 'absolute',
      width: '10%',
      height: '100%',
      left: '0',
      zIndex: '5'
    },
    back: {
      content: 'url("./resource/back.png")',
      position: 'absolute',
      width: '50px',
      height: '50px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: '0',
      transitionDuration: '1s',
      cursor: 'pointer'
    },
    nextArea:{
      position: 'absolute',
      width: '10%',
      height: '100%',
      right: '0',
      zIndex: '5'
    },
    next: {
      content: 'url("./resource/next.png")',
      position: 'absolute',
      width: '50px',
      height: '50px',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)',
      opacity: '0',
      transitionDuration: '1s',
      cursor: 'pointer'
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
      alignItems: 'center',
      zIndex: '5'
    },
    item:{
      position: 'relative',
      width: '100%',
      height:'100%'
    },
    arrow: {
      position: 'absolute',
      content: 'url("./resource/arrow_down.png")',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDuration: '1s',
      height: '30px',
      width: '30px'
    }
  },
  audioBox:{
    container: {
      position: 'fixed',
      bottom: '10%',
      left: '0',
      width: '15%',
      height: '20%',
      zIndex: '5'
    },
    music: {
      position: 'absolute',
      top: '5%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      borderRadius: '5px',
      border: '1px dashed gray',
      textAlign: 'center',
      display: 'none'
    },
    title: {
      marginTop: '40px',
      display: 'block',
      fontWeight: 'bold'
    },
    singer: {
      display: 'block',
      margin: '10px 0',
      fontWeight: 'bold'
    },
    controller:{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      justifyItems: 'center',
      alignItems: 'center',
      margin: '20px 0'
    },
    item:{
      width:'15px',
      height:'15px',
      cursor: 'pointer'
    },
    icon:{
      position: 'absolute',
      content: 'url("./resource/headset.png")',
      width:'35px',
      height:'35px',
      padding: '10px',
      top: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px',
      zIndex: '10',
      cursor: 'pointer'
    }
  },
  dragableBox:{
    frame: {
      position: 'absolute',
      display: 'none',
      width: '16vw',
      height: '16vw',
      lineHeight: '16vw',
      textAlign: 'center',
      fontSize: '4vw',
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '8vw',
      cursor: 'pointer'
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
      content: 'url("./resource/introduction_img.png")',
      width: '35vw',
      height: '28vw'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '10vw',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    text:{
      fontSize: '1.5vw',
      marginTop: '1vw'
    },
    section: {
      position: 'relative',
      height: '100vh',
      width: '100vw'
    },
    centerImg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '14vw',
      height: '14vw',
      padding: '1vw',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8vw',
      border: '1px solid gray',
      cursor: 'pointer',
      boxShodow: '0px 0px 0px 0px gray',
      transitionDuration: '1s'
    },
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
      top: '40%',
      right: '0',
      transform: 'translateY(-50%)',
      content: 'url("./resource/history_img.png")',
      width: '55vw',
      height: '40vw'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '10vw',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    text:{
      fontSize: '1.5vw',
      marginTop: '1vw'
    },
    section: {
      position: 'relative',
      width: '100vw',
      backgroundColor: 'white',
      textAlign: 'center',
      padding: '100px 0'
    }
  },
  historyBox:{
    frame:{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '25vw',
      height: '300px'
    },
    imageFrame:{
      position : 'absolute',
      left: '100%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '30px',
      height: '30px',
      border: '1px solid black',
      borderRadius: '20px',
      backgroundColor: 'white',
      cursor: 'pointer',
      padding: '5px'
    },
    icon:{
      width: '100%',
      height: '100%'
    },
    story:{
      width: '100%',
      height: '100%',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column '
    },
    title:{
      fontSize: '1.2vw',
      margin: '1vw'
    },
    content: {
      fontSize: '0.7vw',
      margin: '1vw',
      whiteSpace: 'pre-line'
    }
  },
  historyTree:{
    verticalLine: {
      width: '1px',
      height: '90%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'black'
    },
    imageFrame:{
      position : 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '100px',
      backgroundColor: 'white',
      cursor: 'pointer',
      zIndex: '1',
      borderRadius: '10px',
      boxShodow: '0px 0px 0px 0px gray',
      transitionDuration: '1s'
    },
    startIcon:{
      width: '100%',
      height: '100%'
    },
    grid: {
      paddingTop: '100px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(8, 120px)',
      gridGap: '60px',
      width: '70%',
      margin: '0 auto'
    },
    gridItem:{
      position: 'relative',
      gridColumn: '2/3',
      gridRow: '2/4'
    },
    gridx:{
      position: 'relative',
      gridRow: 'span 2'
    },
    tree: {
      width: '40vw',
      height: '40vw'
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
      right: '10%',
      transform: 'translateY(-50%)',
      content: 'url("./resource/work_img.png")',
      width: '40vw',
      height: '37vw'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '10vw',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    text:{
      fontSize: '1.5vw',
      marginTop: '1vw'
    },
    section: {
      width: '100vw',
      backgroundColor: 'white',
      textAlign: 'center'
    },
    article: {
      width: '60vw',
      paddingTop: '10vw',
      margin: '0 auto'
    },
    articleTitle: {
      fontSize: '3vw',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }
  },
  workBox:{
    frame: {
      position: 'relative',
      width: '60vw',
      height: '29vw',
      margin: '50px auto',
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: '100%',
      border: '1px solid gray',
      margin: '0 auto'
    },
    explain: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      transitionDuration: '1s',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: 'white',
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column '
    },
    workTitle: {
      fontSize: '2vw',
      margin: '1vw 0'
    },
    view:{
      position: 'fixed',
      display: 'none',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '10'
    },
    layout:{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.75)',
    },
    screenshot:{
      position: 'absolute',
      height: '75vh',
      width: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 0px 10px 10px white'
    },
    closeBtn:{
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      width: '50px',
      height: '50px',
      borderRadius: '25px'
    },
    back:{
      position: 'absolute',
      left: '5%',
      top: '50%',
      width: '50px',
      height: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0px 0px 5px 5px white',
      cursor: 'pointer'
    },
    next:{
      position: 'absolute',
      right: '5%',
      top: '50%',
      width: '50px',
      height: 'auto',
      transform: 'translate(50%, -50%)',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0px 0px 5px 5px white',
      cursor: 'pointer'
    },
    title:{
      fontSize: '1.5vw',
      margin: '1vw'
    },
    content: {
      fontSize: '1vw',
      margin: '1vw',
      whiteSpace: 'pre-line'
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
      content: 'url("./resource/contact_img.png")',
      width: '40vw',
      height: '25vw'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      transform: 'translateY(-50%)',
      fontSize: '10vw',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    text:{
      fontSize: '1.5vw',
      marginTop: '1vw'
    },
    section: {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
      position: 'relative'
    },
    outCircle: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -60%)',
      width: '37vw',
      height: '37vw',
      borderRadius: '19vw',
      border: '10px solid #685357'
    },
    inCircle: {
      position: 'absolute',
      display: 'grid',
      gridTemplateRows: 'repeat(3, 2fr 3fr)',
      justifyItems: 'center',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '35vw',
      height: '35vw',
      borderRadius: '18vw',
      backgroundColor: '#685357',
      textAlign: 'center'
    },
    icon: {
      width: '2vw',
      height: '2vw'
    },
    info:{
      fontSize: '2vw',
      color: 'white',
      textDecoration: 'none',
      userSelect: 'text'
    }
  },
  footer:{
    container: {
      display: "grid",
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '50px',
      width: '70vw',
      height: '100px',
      margin: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      textAlign: 'center'
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  },
  
}

export default styles;