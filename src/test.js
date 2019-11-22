import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styles from './styles'

const style = styles.test
const audio = require('./function/audioControl')

export default class Opening extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: '', hold: false, music: true
    }
  }
  componentDidMount(){
    const video = document.querySelector('.video')
    video.play()
  }
  opacity(e){
    const name = document.querySelector('.name')
    e.target.style.opacity = '0'
    name.style.opacity = '1'
  }
  render(){
    if(this.state.jump){
      return <Redirect to={this.state.jump} />
    }
    return (
      <div style={style.screen}>
        <video class="video" style={style.video} muted
          onPlay={e => this.opacity(e)}>
          <source src="./resource/ghost.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div class="name" style={style.name}>PARK SANG UN</div>
      </div>
    )
  }
}