// 메인 4페이지의 상단 네비게이션 바
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.mainHeader

export default class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      jump: ''
    }
  }
  render(){
    return (
      <nav>
        <ul style={style.nav}>
          <li style={style.items}>Introduction</li>
          <li style={style.items}>History</li>
          <li style={style.items}>Work</li>
          <li style={style.items}>Contact</li>
        </ul>
      </nav>
    )
  }
}