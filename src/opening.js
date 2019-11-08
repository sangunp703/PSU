import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styles from './styles'

const style = styles.opening

export default class Opening extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: '', hold: false
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
      
      if(img_w >= 5 && img_w <= 90){
        control.style.left = img_w + '%'
        name.style.fontSize = name_s + 'vw'
        ask.style.left = img_w + '%'
      }
      if(img_w >= 90){
        button.style.display = 'block'
      } else {
        button.style.display = 'none'
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
  next(e){
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
        <p class="go" style={style.button}
          onMouseOver={e => e.target.style.color="black"} 
          onMouseOut={e => e.target.style.color = "white"}
          onClick={e => this.next(e)}>Let's find out</p>
        <p class="ask" style={style.ask}>Drag me!</p>
        <img class="control" style={style.control}
          onMouseDown={e => this.mouseDown(e)}/>
      </div>
    )
  }
}