// 메인 4페이지의 상단 네비게이션 바
import React, {Component} from 'react'
import styles from '../styles'

const style = styles.mainHeader

export default class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: props.color
    }
  }
  componentDidMount(){
    document.querySelector('.nav').style.backgroundColor = this.state.color
  }
  render(){
    return (
      <nav>
        <ul class="nav" style={style.nav}>
          <li style={style.items}
            onClick={() => this.props.jump('/introduction')}>Introduction</li>
          <li style={style.items}
            onClick={() => this.props.jump('/history')}>History</li>
          <li style={style.items}
            onClick={() => this.props.jump('/work')}>Work</li>
          <li style={style.items}
            onClick={() => this.props.jump('/contact')}>Contact</li>
        </ul>
      </nav>
    )
  }
}