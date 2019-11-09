import React, {Component} from 'react'
import styles from '../styles'

const style = styles.audioBox

export default class AudioBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
  }
  componentDidMount(){
    document.querySelector('.control').style.backgroundColor = this.props.color
    document.querySelector('.box').style.borderColor = this.props.color
  }
  musicToggle(){
    const box = document.querySelector('.box')
    if(this.state.toggle){
      box.style.display = "none"
      this.setState({toggle: false})
    } else{
      box.style.display = "block"
      this.setState({toggle: true})
    }
  }
  render(){
    return (
      <div style={style.container}>
        <div class="box" style={style.music}>
          <p style={style.title}>Wake me up</p>
          <p style={style.singer}>J.Fla</p>
          <div style={style.controller}>
            <img src="./resource/volume_down.png" style={style.item}/>
            <img src="./resource/play.png" style={style.item}/>
            <img src="./resource/pause.png" style={style.item}/>
            <img src="./resource/volume_up.png" style={style.item}/>
          </div>
        </div>
        <img class="control" style={style.icon}
          onClick={e => this.musicToggle()}></img>
      </div>
    )
  }
}