// 아래로 스크롤 화살표
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.bottomArrow

export default class BottomArrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
  }
  render(){
    return (
      <div style={style.arrowBox}>
        <img style={style.arrow}/>
        <img style={style.arrow}/>
        <img style={style.arrow}/>
      </div>
    )
  }
}