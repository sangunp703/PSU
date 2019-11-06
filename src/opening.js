import React, {Component} from 'react'
import styles from './styles'
import coral from '../resource/living_coral.jpg'

const style = styles.opening

export default class Opening extends Component{
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
  }
  render(){
    return (
      <div style={style.screen}>
        <div style={style.case}><h1 style={style.name}>PARK SANG UN</h1></div>
        <div style={style.cover}></div>
      </div>
    )
  }
}