// 오른쪽 왼쪽 이동
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.sideArrow

export default class SideArrow extends Component {
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
  }
  render(){
    return (
      <div style={style.arrowBox}>
        <img style={style.back} />
        <img style={style.next} />
      </div>
    )
  }
}