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
    document.querySelector('.' + this.props.path).style.borderBottom = '2px dashed black'
  }
  render(){
    return (
      <nav>
        <ul class="nav" style={style.nav}>
          <li class="introduction" style={style.items}
            onClick={() => this.props.jump('/introduction')}
            onMouseOver={e => e.target.style.color="white"}
            onMouseOut={e => e.target.style.color="black"}>Introduction</li>
          <li class="history" style={style.items}
            onClick={() => this.props.jump('/history')}
            onMouseOver={e => e.target.style.color="white"}
            onMouseOut={e => e.target.style.color="black"}>History</li>
          <li class="work" style={style.items}
            onClick={() => this.props.jump('/work')}
            onMouseOver={e => e.target.style.color="white"}
            onMouseOut={e => e.target.style.color="black"}>Work</li>
          <li class="contact" style={style.items}
            onClick={() => this.props.jump('/contact')}
            onMouseOver={e => e.target.style.color="white"}
            onMouseOut={e => e.target.style.color="black"}>Contact</li>
        </ul>
      </nav>
    )
  }
}