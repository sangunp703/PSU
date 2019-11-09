import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styles from './styles'

const style = styles.opening
const audio = require('./function/audioControl')

export default class Opening extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: '', hold: false, music: true
    }
  }
  mouseDrag(e){
    if(this.state.hold){
      const control = document.querySelector('.control')
      const name = document.querySelector('.name')
      const img_w = (e.clientX / window.outerWidth) * 100
      const name_s = 12 * img_w * 0.01
      const button = document.querySelector('.go')
      const ask = document.querySelector('.ask')
      const warning = document.querySelector('.warning')
      
      if(img_w >= 5 && img_w <= 90){
        control.style.left = img_w + '%'
        name.style.fontSize = name_s + 'vw'
        ask.style.left = img_w + '%'
      }
      if(img_w >= 90){
        button.style.display = 'block'
        warning.style.display = 'block'
      } else {
        button.style.display = 'none'
        warning.style.display = 'none'
      }
    }
  }
  mouseDown(e){
    const ask = document.querySelector('.ask')
    ask.style.display = 'none'
    this.setState({hold: true})
  }
  mouseUp(e){
    const ask = document.querySelector('.ask')
    ask.style.display = 'block'
    this.setState({hold: false})
  }
  musicToggle(e){
    const musicIcon = document.querySelector('.musicIcon')
    if(this.state.music){
      musicIcon.style.content = 'url("./resource/no_headset.png")'
      this.setState({music: false})
    } else {
      musicIcon.style.content = 'url("./resource/headset.png")'
      this.setState({music: true})
    }
  }
  next(e){
    audio.volumeInit()
    if(this.state.music){
      audio.playMusic()
    }
    this.setState({jump: '/introduction'})
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div style={style.screen}
        onMouseMove={e => this.mouseDrag(e)}
        onMouseUp={e => this.mouseUp(e)}
        onMouseLeave={e => this.mouseUp(e)}>
        <h1 class="name" style={style.name}>PARK SANG UN</h1>
        <div class="warning" style={style.warning}>
          <img src="./resource/headset.png" class ="musicIcon" style={style.musicChoice}
            onClick={e => this.musicToggle(e)}
            onMouseOver={e => e.target.style.boxShadow = "0px 0px 20px 3px rgba(0,0,0,0.75)"}
            onMouseOut={e => e.target.style.boxShadow = "none"}/>
          <p style={style.word}><strong>WARNING!!</strong><br />This web site includes music.<br />Make sure your choice with a button on the left</p>
        </div>
        <p class="go" style={style.button}
          onMouseOver={e => e.target.style.color = "black"} 
          onMouseOut={e => e.target.style.color = "white"}
          onClick={e => this.next(e)}>Let's find out</p>
        <p class="ask" style={style.ask}>Drag me!</p>
        <img class="control" style={style.control}
          onMouseDown={e => this.mouseDown(e)}/>
      </div>
    )
  }
}